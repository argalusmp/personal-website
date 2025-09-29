import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vidi Marpaung - Data Scientist & Web Developer",
  description: "Portfolio website showcasing data science projects, web development skills, and professional experience in machine learning and full-stack development.",
  keywords: "Vidi Marpaung, Data Scientist, Web Developer, Machine Learning, Python, React, Next.js, Portfolio",
  authors: [{ name: "Vidi Marpaung" }],
  creator: "Vidi Marpaung",
  openGraph: {
    title: "Vidi Marpaung - Data Scientist & Web Developer",
    description: "Portfolio website showcasing data science projects and web development skills",
    url: "https://vidi-marpaung.vercel.app",
    siteName: "Vidi Marpaung Portfolio",
    images: [
      {
        url: "/images/profil.jpg",
        width: 1200,
        height: 630,
        alt: "Vidi Marpaung Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidi Marpaung - Data Scientist & Web Developer",
    description: "Portfolio website showcasing data science projects and web development skills",
    images: ["/images/profil.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">
        <div className="relative min-h-screen bg-gradient-dark">
          {/* Background Effects */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-accent-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "2s" }}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-tertiary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "4s" }}></div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
