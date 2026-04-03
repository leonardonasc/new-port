import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque} from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Leonardo Nascimento",
  description: "Portfolio",
};

export default function RootLayout({
  children,
    }: Readonly<{
      children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} selection:bg-neutral-800 antialiased`}
      >
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
