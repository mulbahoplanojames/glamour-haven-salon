"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { useCart } from "@/context/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { MobileNavbar } from "./mobile-navbar";
import { useCart } from "@/context/cart-context";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { extraNavItems, navigation } from "@/data/nav-data";
import { deleteCookie, getCookie } from "cookies-next";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const storedToken = getCookie("access_token") as string | undefined;
    setToken(storedToken);
    setLoading(false);
  }, []);
  // const token = getCookie("access_token");
  const user = getCookie("user");

  const userRole = user ? JSON.parse(user as string).is_customer : true;

  // console.log("User Role:", userRole);
  // console.log("token:", token);
  // console.log("user:", JSON.parse(user as string));

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
              Glamour
            </span>
            <span>Salon</span>
          </Link>
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
        <div className="flex flex-1 justify-end items-center gap-4">
          <div className="lg:flex hidden">
            <ThemeModeToggle />
          </div>

          <Button
            variant="outline"
            size="icon"
            className="relative hidden  lg:flex justify-center items-center"
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
                  <Badge className="h-5 w-5 p-0 flex items-center justify-center rounded-full">
                    {cartItemCount}
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </Button>

          {!loading && token ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="size-10 bg-red-200 rounded-full border-2 border-primary"></div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  Welcome {userRole ? "Customer" : "Admin"}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {!userRole && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin">Dashboard</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    deleteCookie("access_token");
                    deleteCookie("user");
                    window.location.reload();
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/sign-in">
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white cursor-pointer">
                Sign in
              </Button>
            </Link>
          )}

          <div className="flex lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </nav>
    </header>
  );
}
