"use client";

import { useCart } from "@/context/cart-context";
import { Product } from "@/types/product-type";
import { Heart } from "lucide-react";

const FavoriateButton = ({ product }: { product: Product }) => {
  const { favorites, toggleFavorite } = useCart();

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(product.id);
      }}
      className="absolute top-2 right-2 rounded-full bg-white p-1.5 text-gray-900 shadow-sm hover:bg-gray-100 transition-colors z-10"
      aria-label={
        favorites.includes(product.id)
          ? "Remove from favorites"
          : "Add to favorites"
      }
      style={{ pointerEvents: "auto" }}
    >
      <Heart
        className={`h-5 w-5 transition-colors ${
          favorites.includes(product.id) ? "fill-red-500 text-red-500" : ""
        }`}
      />
    </button>
  );
};

export default FavoriateButton;
