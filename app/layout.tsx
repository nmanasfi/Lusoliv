import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Lusoliv — Property Management & Exports",
  description: "Lusoliv provides remote property management in Portugal, with future expansion into premium olive oil and seafood exports."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${inter.className} antialiased`}>{children}</body></html>);
}
