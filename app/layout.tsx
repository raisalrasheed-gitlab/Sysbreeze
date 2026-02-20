import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Ui/Header/header";
import Footer from "@/components/Ui/Footer/Footer";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sysbreeze | Business Consulting, IT Services & Training",
    template: "%s | Sysbreeze"
  },
  description: "Sysbreeze is a future-focused business consulting, IT services, and training company dedicated to helping brands grow, businesses scale, and professionals build real-world skills.",
  keywords: ["Business Consulting", "IT Services", "Professional Training", "Branding", "Digital Marketing", "HR Management", "Web Design"],
  authors: [{ name: "Sysbreeze" }],
  creator: "Sysbreeze",
  publisher: "Sysbreeze",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sysbreeze | Business Consulting, IT Services & Training",
    description: "Helping brands grow, businesses scale, and professionals build real-world skills.",
    url: "https://sysbreeze.com",
    siteName: "Sysbreeze",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sysbreeze | Business Consulting, IT Services & Training",
    description: "Helping brands grow, businesses scale, and professionals build real-world skills.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${instrumentSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
