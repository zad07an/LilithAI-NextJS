import "../globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LilithAI - Auth",
  description: "Simplifying Legal Advice for Everyday Users"
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-dark-1 w-full`}>{children}</body>
    </html>
  );
}
