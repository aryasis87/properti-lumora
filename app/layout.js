import "./globals.css";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600", "700"], style: ["normal", "italic"], display: "swap" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });

export const metadata = {
  title: "Lumora — Properti Premium Pilihan",
  description: "Marketplace properti premium: hunian, villa, dan ruang eksklusif di lokasi terbaik se-Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        <div className="grain" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
