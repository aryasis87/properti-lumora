import "./globals.css";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600", "700"], style: ["normal", "italic"], display: "swap" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });

const __jsonld = {"@context":"https://schema.org","@type":"RealEstateAgent","name":"Lumora","description":"Marketplace properti premium","url":"https://lumora.pintuweb.com","areaServed":"ID"};

export const metadata = {
  metadataBase: new URL("https://lumora.pintuweb.com"),
  title: "Lumora — Properti Premium Pilihan",
  description: "Marketplace properti premium: hunian, villa, dan ruang eksklusif di lokasi terbaik se-Indonesia.",
  applicationName: "Lumora",
  keywords: ["properti premium", "villa mewah", "hunian eksklusif", "luxury property", "real estate"],
  authors: [{ name: "Lumora" }],
  creator: "Lumora",
  publisher: "Lumora",
  alternates: { canonical: "https://lumora.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lumora.pintuweb.com",
    siteName: "Lumora",
    title: "Lumora — Properti Premium Pilihan",
    description: "Marketplace properti premium: hunian, villa, dan ruang eksklusif di lokasi terbaik se-Indonesia.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lumora — Properti Premium Pilihan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumora — Properti Premium Pilihan",
    description: "Marketplace properti premium: hunian, villa, dan ruang eksklusif di lokasi terbaik se-Indonesia.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        <div className="grain" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
