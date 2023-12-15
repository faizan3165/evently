import type { Metadata } from "next";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

import "../globals.css";

export const metadata: Metadata = {
  title: "Evently",
  description: "A platform for event management",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
