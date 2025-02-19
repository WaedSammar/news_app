import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { Roboto, Mulish } from 'next/font/google';

const robotoFont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  fallback: ['Tahoma', 'Arial'],
  display: 'swap',
  variable: '--font-roboto'
});

const mulishFont = Mulish({
  weight: ['400', '700'],
  subsets: ['latin'],
  fallback: ['Tahoma', 'Arial'],
  display: 'swap',
  variable: '--font-mulish'
});

const rootFont = `
  :root{
    --font-roboto: ${robotoFont.style.fontFamily};
    --font-mulish: ${mulishFont.style.fontFamily};
  }
`;

export const metadata: Metadata = {
  title: "GSG News",
  description: "GSG News, get latest news around the world"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <style>{rootFont}</style>
        <Header />
        {children}
      </body>
    </html>
  );
}
