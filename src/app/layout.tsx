import type { Metadata } from "next";
import "./globals.css";
import ClientSideProvider from "@/context/theme";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Matheus Wallace da Silva Pereira",
  description: "Personal portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientSideProvider>
        <body>
          <Header />
          {children}
        </body>
      </ClientSideProvider>
    </html>
  );
}
