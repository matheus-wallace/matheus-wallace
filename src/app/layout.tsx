import type { Metadata } from "next";
import "./globals.css";
import ClientSideProvider from "@/context/theme";
import Header from "@/components/Header";
import { LanguageProvider } from "@/context/translations";

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
            {children}
          </LanguageProvider>
        </ClientSideProvider>
      </body>
    </html>
  );
}
