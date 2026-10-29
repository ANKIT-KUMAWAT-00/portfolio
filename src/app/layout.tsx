import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankit Kumawat — Full-Stack AI/ML Engineer",
  description:
    "Building the Future with AI & Software. Portfolio of Ankit Kumawat — Full-Stack AI/ML Engineer specializing in Agentic AI, Computer Vision, Scalable Distributed Backends, and Modern Web Systems.",
  keywords: [
    "Ankit Kumawat",
    "Full-Stack AI/ML Engineer",
    "Machine Learning Engineer",
    "LangGraph",
    "FastAPI",
    "Next.js",
    "Computer Vision",
    "Three.js",
  ],
  authors: [{ name: "Ankit Kumawat", url: "https://linkedin.com/in/ankit-kumawat" }],
  creator: "Ankit Kumawat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ankitkumawat.dev",
    title: "Ankit Kumawat — Full-Stack AI/ML Engineer",
    description: "Building the Future with AI & Software.",
    siteName: "Ankit Kumawat Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0806",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="bg-background text-warm-white antialiased selection:bg-gold-champagne/25 selection:text-warm-white min-h-screen relative overflow-x-hidden">
        {/* Subtle cinematic film grain noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
