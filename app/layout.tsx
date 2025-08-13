import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/mona-sans.css";
import { Navigation } from "@/components/navigation";
import Footer4Col from "@/components/ui/footer-column";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logicwerk - AI-Powered Enterprise Solutions",
  description:
    "Transform your business with LeadIQ, Procufy, and Logicwerk EIP. Comprehensive AI solutions for lead generation, procurement automation, and intelligent workflows.",
  keywords:
    "AI, enterprise software, lead generation, procurement automation, workflow automation, artificial intelligence",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
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
  );
}