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
  title: "Cihad Furkan Yücel | Full Stack Developer & Prompt Engineer",
  description:
    "The personal portfolio of Cihad Furkan Yücel. A passionate Full Stack Developer from Turkey, turning ideas into robust web applications and exploring the world.",

  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Cihad Furkan Yücel",
    "Yazılım Geliştirici",
    "Prompt Engineer",
  ],

  openGraph: {
    title: "Cihad Furkan Yücel | Full Stack Developer",
    description:
      "Discover the projects and skills of Cihad Furkan Yücel, a developer passionate about creating digital experiences.",
    url: "https://nextjs-portfolio-woad-eta.vercel.app/",
    siteName: "Cihad Furkan Yücel Portfolio",
    images: [
      {
        url: "https://nextjs-portfolio-woad-eta.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cihad Furkan Yücel - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cihad Furkan Yücel | Full Stack Developer",
    description: "Discover the projects and skills of Cihad Furkan Yücel.",
    images: ["https://nextjs-portfolio-woad-eta.vercel.app/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico", // Standart favicon
    shortcut: "/favicon-16x16.png", // Örnek
    apple: "/apple-touch-icon.png", // Örnek
  },

  authors: [
    {
      name: "Cihad Furkan Yücel",
      url: "https://nextjs-portfolio-woad-eta.vercel.app/",
    },
  ],
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
