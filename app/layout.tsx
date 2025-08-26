import GoogleAnalytics from "@/components/GoogleAnalytics";
import Head from "next/head";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/mona-sans.css";
import { Navigation } from "@/components/navigation";
import Footer4Col from "@/components/ui/footer-column";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logicwerk | AI-Powered Software Delivery For Modern Businesses.",
  description:
    "Disrupt legacy IT services with Logicwerk's 9 specialized packs — from AI Agents and Cloud to Data, QA, and Industry 4.0 solutions. Delivering software and innovation at sprint speed.",
  keywords:
    "software development, AI software delivery, AI agents, enterprise software, web development, mobile app development, embedded systems design, cloud transformation, data analytics, machine learning, LLM training, quality assurance, application performance monitoring, IT infrastructure management, enterprise application integration, business process outsourcing, Industry 4.0, IoT development, CAD/CAM modeling, blockchain development, workflow automation, AI-powered solutions",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://api.fontshare.com/v2/css?f[]=mona-sans@400,500,600,700,800&display=swap" />
      </Head>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
          <GoogleAnalytics />
          <div suppressHydrationWarning>
            <Navigation />
          </div>
          <main className="pt-20" suppressHydrationWarning>
            {children}
          </main>
          <div suppressHydrationWarning>
            <Footer4Col />
          </div>
        </body>
      </html>
    </>
  );
}