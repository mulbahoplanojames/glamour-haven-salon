"use client";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import { allNavItems } from "@/data/nav-data";
import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNavbar() {
  const { items, setIsCartOpen } = useCart();
  const pathname = usePathname();

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetClose asChild>
              <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Glamour
                </span>
                <span>Salon</span>
              </Link>
            </SheetClose>
          </div>
        </SheetHeader>
        <div>
          <div className="mt-1 mx-3">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-1 py-3">
                {allNavItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted ${
                        pathname === item.href
                          ? "text-primary"
                          : "text-foreground/80"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <ThemeModeToggle />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  onClick={() => {
                    setIsCartOpen(true);
                  }}
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Open cart</span>
                  {cartItemCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full"
                    >
                      {cartItemCount}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
