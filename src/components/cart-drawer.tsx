"use client";

import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/cart-context";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
  } = useCart();

  const closeCart = () => setIsCartOpen(false);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold flex items-center">
                <ShoppingBag className="mr-2 size-5" />
                Your Cart
                <span className="ml-2 text-sm text-muted-foreground">
                  {/* ({items.items.reduce((sum, item) => sum + item.quantity, 0)}{" "} */}
                  items
                </span>
              </h2>
              <Button variant="ghost" size="icon" onClick={closeCart}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            {items?.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">
                  Your items is empty
                </h3>
                <p className="text-muted-foreground mb-6">
                  Looks like you haven&apos;t added any products to your items
                  yet.
                </p>
                <Button onClick={closeCart} asChild>
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-4">
                    <AnimatePresence initial={false}>
                      {items.map((item, index: number) => (
                        <motion.li
                          key={index}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="flex gap-4 border-b pb-4"
                        >
                          <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                            <Image
                              src={item.product.image || "/placeholder.svg"}
                              alt={item.product.image}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">
                              {item.product.name}
                            </h4>
                            <p className="text-primary font-medium mt-1">
                              {formatCurrency(item.product.price)}
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                              {item.size && (
                                <div className="mt-1 mb-2">
                                  <span className="text-xs bg-primary px-2 py-1 rounded dark:text-white">
                                    Size: {item.size}
                                  </span>
                                </div>
                              )}
                              {item.color && (
                                <div className="mt-1 mb-2">
                                  <span className="text-xs bg-primary px-2 py-1  dark:text-white">
                                    Color: {item.color}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center mt-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity - 1,
                                    item.size,
                                    item.color
                                  )
                                }
                              >
                                <Minus className="h-3 w-3" />
                                <span className="sr-only">
                                  Decrease quantity
                                </span>
                              </Button>
                              <span className="w-8 text-center">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity + 1,
                                    item.size,
                                    item.color
                                  )
                                }
                              >
                                <Plus className="h-3 w-3" />
                                <span className="sr-only">
                                  Increase quantity
                                </span>
                              </Button>
                            </div>
                          </div>
                          <div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 text-muted-foreground hover:text-destructive"
                              onClick={() =>
                                removeFromCart(
                                  item.product.id,
                                  item.size,
                                  item.color
                                )
                              }
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Remove item</span>
                            </Button>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </div>

                <div className="border-t p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      Free
                      {/* <span>
                        {items.shipping === 0
                          ? "Free"
                          : formatCurrency(items.shipping)}
                      </span> */}
                    </div>
                    <div className="flex justify-between font-medium pt-2 border-t">
                      <span>Total </span>
                      <span>{totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" onClick={closeCart}>
                      Continue Shopping
                    </Button>
                    <Button asChild className="text-white">
                      <Link href="/products/checkout" onClick={closeCart}>
                        Checkout
                      </Link>
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-muted-foreground text-xs"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
