import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://vidi-argalus.vercel.app"),
  title: "Vidi Septri Argalus MP | IT Developer, Data & AI",
  description: "Results-driven IT professional and Informatics Engineering graduate with experience in data analysis, backend development, machine learning, ERP implementation, and AI chatbot delivery. Highlights include a 70% reduction in manual reporting time and a high-answerable-rate RAG chatbot.",
  keywords: "Vidi Septri Argalus, Vidi Argalus, Data Scientist, Data Analyst, Business Analyst, IT Developer, Backend Developer, Machine Learning, LLM, RAG, Python, FastAPI, React, Next.js, NestJS, ERP, PostgreSQL, Portfolio",
  authors: [{ name: "Vidi Septri Argalus MP" }],
  creator: "Vidi Septri Argalus MP",
  openGraph: {
    title: "Vidi Septri Argalus MP | IT Developer, Data & AI",
    description: "IT professional and Informatics Engineering graduate focused on data analysis, backend development, machine learning, ERP systems, and AI chatbot delivery.",
    url: "https://vidi-argalus.vercel.app",
    siteName: "Vidi Argalus Portfolio",
    images: [
      {
        url: "/images/main-profil.png",
        width: 1200,
        height: 630,
        alt: "Vidi Septri Argalus MP Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidi Septri Argalus MP | IT Developer, Data & AI",
    description: "IT professional and Informatics Engineering graduate focused on data analysis, backend development, machine learning, ERP systems, and AI chatbot delivery.",
    images: ["/images/main-profil.png"],
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
          {/* Noise texture removed */}
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
