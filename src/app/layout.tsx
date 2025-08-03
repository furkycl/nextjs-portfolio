import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Cihad Furkan Yücel | Full Stack Developer",
  description: "The portfolio of Cihad Furkan Yücel, a passionate developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans bg-[#0A192F]`}
      >
        <Navbar />
        <main>{children}</main> <Footer />
      </body>
    </html>
  );
}
