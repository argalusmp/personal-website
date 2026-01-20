import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vidi Septri Argalus MP - IT Developer & Data Scientist",
  description: "Solution-oriented IT Developer and Data Scientist specializing in full-stack development (JavaScript/React, Python/FastAPI) and Machine Learning/LLM engineering. Proven track record with 70% reduction in manual reporting time and successful RAG/LLM chatbot development.",
  keywords: "Vidi Septri Argalus, Vidi Argalus, Data Scientist, IT Developer, Machine Learning Engineer, LLM, RAG, Python, FastAPI, React, Next.js, NestJS, Portfolio, Backend Developer",
  authors: [{ name: "Vidi Septri Argalus MP" }],
  creator: "Vidi Septri Argalus MP",
  openGraph: {
    title: "Vidi Septri Argalus MP - IT Developer & Data Scientist",
    description: "Solution-oriented IT Developer & Data Scientist with expertise in full-stack development and Machine Learning/LLM engineering",
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
    title: "Vidi Septri Argalus MP - IT Developer & Data Scientist",
    description: "Solution-oriented IT Developer & Data Scientist with expertise in full-stack development and Machine Learning/LLM engineering",
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
          {children}
        </div>
      </body>
    </html>
  );
}
