import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopSaleBanner from "@/app/components/TopSaleBanner";
import ToastHost from "@/app/components/ToastHost";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MotoZoop — Car Accessories Store",
  description: "Premium car accessories for style, comfort, and performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ToastHost>
          <TopSaleBanner />
          {children}
        </ToastHost>
      </body>
    </html>
  );
}
