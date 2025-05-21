"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { useCart } from "@/context/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { MobileNavbar } from "./mobile-navbar";
import { useCart } from "@/context/cart-context";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { extraNavItems, navigation } from "@/data/nav-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { items, setIsCartOpen } = useCart();

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b-2 border-primary transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-2xl shadow-sm"
          : "bg-background/90 backdrop-blur-md shadow-sm"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Prince
            </span>
            <span>Salon</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <MobileNavbar />
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                pathname === item.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}

          {/* More dropdown for extra features */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary relative group text-foreground/80">
              More
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {extraNavItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "text-primary" : ""}
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
          <ThemeModeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Open cart</span>
            <AnimatePresence>
              {cartItemCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2"
                >
                  <Badge
                    variant="destructive"
                    className="h-5 w-5 p-0 flex items-center justify-center rounded-full"
                  >
                    {cartItemCount}
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
          <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white cursor-pointer">
            Sign in
          </Button>
        </div>
      </nav>
    </header>
  );
}
