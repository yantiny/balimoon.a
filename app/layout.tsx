import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Font untuk body (modern & bersih)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Font untuk heading/aksen (mewah & elegan)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Aksesorisku | Toko Aksesoris Terlengkap",
  description:
    "Temukan koleksi aksesoris tangan, kalung, dan perhiasan elegan untuk melengkapi gaya Anda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
