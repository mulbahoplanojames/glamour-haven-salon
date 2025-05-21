"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/product-type";
import FavoriateButton from "./favoriate-button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div variants={item}>
      <div key={product.id} className="group relative ">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="h-full w-full object-scale object-center group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          />

          {/* Product Badge */}
          {product.badge && (
            <div
              className={`absolute top-2 left-2 ${product.badge.color} text-white text-xs font-bold px-2 py-1 rounded-md`}
            >
              {product.badge.text}
            </div>
          )}

          {/* Dark Overlay */}
          <Link href={`/products/${product.id}`}>
            <div className=" absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>

          {/* Favorite Button - Always on top */}
          <FavoriateButton product={product} />
        </div>
        <div className="mt-4">
          <Link href={`/products/${product.id}`} className="block">
            <div className="flex justify-between">
              <div>
                <h3 className="text-base pb-1 text-gray-700 group-hover:underline dark:text-white">
                  {product.name}
                </h3>
                <p className="my-1  text-sm text-gray-500 flex justify-between  dark:text-white">
                  <span> {product.category}</span>
                  <span className="font-bold text-primary_main">
                    Unit/{product.unit}
                  </span>
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </Link>
          <div className="mt-1 flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
