import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/Footer";
import { CartProvider } from "@/context/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import TankstackQueryclientProvider from "@/context/tankstack-queryclient-provider";

export const metadata: Metadata = {
  title: "Glamour Haven Salon",
  description: "Your Ultimate Beauty Destination",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TankstackQueryclientProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col ">
          <Navbar />
          <div className="flex-1">{children}</div>
          <CartDrawer />
          <Footer />
        </div>
      </CartProvider>
    </TankstackQueryclientProvider>
  );
}
