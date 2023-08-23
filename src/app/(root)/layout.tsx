import Navbar from "@/components/navigation/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Bottombar from "@/components/navigation/Bottombar";
import Footer from "@/components/footer/Footer";
import AppProvider from "@/context/AppProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LilithAI",
  description: "Simplifying Legal Advice for Everyday Users"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-dark-1 w-full`}>
        <AppProvider>
          <Navbar />
          {children}
          <Bottombar />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
