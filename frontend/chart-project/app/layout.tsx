import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./nav";
import { StoreProvider } from "./redux/StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blockhouse Charts",
  description: "Take home assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Nav />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
