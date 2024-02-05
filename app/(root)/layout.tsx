import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({ subsets: ["latin"],
weight:['400','500', '600','700'],
variable:'--font-poppins'});

export const metadata: Metadata = {
  title: 'Events for us',
  description: 'Manage and view events around you',
  icons: { icon: 'assets/images/logo.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
