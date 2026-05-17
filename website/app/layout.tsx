import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luminance Labs - AI-Powered Automation",
  description: "Empowering CIOs and Innovation Leaders to streamline workflows, enhance efficiency, and drive growth through cutting-edge AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white">
        {children}
      </body>
    </html>
  );
}
