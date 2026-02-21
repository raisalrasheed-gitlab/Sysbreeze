import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Ui/Header/header";
import Footer from "@/components/Ui/Footer/Footer";

const instrumentSans = localFont({
  src: [
    {
      path: "../public/font/static/InstrumentSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/static/InstrumentSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/static/InstrumentSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/static/InstrumentSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-instrument-sans",
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
        className={`${instrumentSans.variable} antialiased relative overflow-x-hidden w-full`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
