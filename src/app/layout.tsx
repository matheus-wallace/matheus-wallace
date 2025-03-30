import type { Metadata } from "next";
import "./globals.css";
import ClientSideProvider from "@/context/theme";
import Header from "@/components/Header";
import { LanguageProvider } from "@/context/translations";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Matheus Wallace | Full Stack Developer",
  description: "Personal portifólio",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={locale}>
      <body>
        <ClientSideProvider>
          <LanguageProvider>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </LanguageProvider>
        </ClientSideProvider>
      </body>
    </html>
  );
}
