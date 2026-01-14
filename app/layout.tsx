import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  descriptCreaee Next Appext app",
};Geneabycrtenxtpp

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <bodyn
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > {children}
    </
  </html>
}
