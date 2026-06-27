import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import MouseSpotlight from "@/components/MouseSpotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PoojaSri Popuri | Full Stack Developer & AI & ML Student",
  description: "Portfolio of PoojaSri Popuri, a Full Stack Developer and AI & ML student at Vignan's Foundation for Science, Technology & Research. Building modern web applications and exploring AI-powered solutions.",
  keywords: ["PoojaSri Popuri", "Full Stack Developer", "AI & ML", "JavaScript", "Node.js", "Python", "Web Development", "Portfolio", "Thiranex Intern"],
  authors: [{ name: "PoojaSri Popuri" }],
  creator: "PoojaSri Popuri",
  openGraph: {
    title: "PoojaSri Popuri | Full Stack Developer & AI & ML Student",
    description: "Portfolio of PoojaSri Popuri, a Full Stack Developer and AI & ML student at Vignan's Foundation for Science, Technology & Research. Building modern web applications and exploring AI-powered solutions.",
    type: "website",
    locale: "en_US",
    siteName: "PoojaSri Popuri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "PoojaSri Popuri | Full Stack Developer & AI & ML Student",
    description: "Portfolio of PoojaSri Popuri, a Full Stack Developer and AI & ML student at Vignan's Foundation for Science, Technology & Research.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">
        <LoadingScreen />
        <SmoothScroll />
        <MouseSpotlight />
        {children}
      </body>
    </html>
  );
}
