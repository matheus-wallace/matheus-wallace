import type { Metadata } from "next";
import "./globals.css";
import ClientSideProvider from "@/context/theme";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Matheus Wallace | Desenvolvedor Frontend",
  description: "Personal portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientSideProvider>
          <Header />
          {children}
        </ClientSideProvider>
      </body>
    </html>
  );
}
