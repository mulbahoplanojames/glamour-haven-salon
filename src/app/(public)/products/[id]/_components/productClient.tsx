"use client";

import { useCart } from "@/context/cart-context";
import { getRelatedProducts } from "@/lib/utils";
import {
  ChevronRight,
  Heart,
  RotateCcw,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import RelatedProducts from "./RelatedProducts";
import ProductImage from "./ProductImage";
import ProductQuantity from "./ProductQuantity";
// import SizeSelection from "./SizeSelection";
// import ColorSelection from "./ColorSelection";
import { Product } from "@/types/product-type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import products from "@/data/products.json";

export const handleFetchProducts = async ({ id }: { id: string }) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/one-product/${id}/`
    );
    const data = await response.data;

    return data;
  } catch (error) {
    console.log("Error fetching Products", error);
  }
};

const ProductClient = ({ params }: { params: { id: string } }) => {
  const {
    addToCart,
    favorites,
    toggleFavorite,
    updateQuantity,
    removeFromCart,
    items,
  } = useCart();

  const { id } = params;
  const { data: product } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => handleFetchProducts({ id }),
  });

  console.log("Product : " + product);

  const relatedProducts = product ? getRelatedProducts(product) : [];

  // State for selected size, quantity, favorite status, and current image
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined
  );

  // const [selectedColor, setSelectedColor] = useState<string | undefined>(
  //   product?.colors && product.colors.length > 0 ? product.colors[0] : undefined
  // );
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const router = useRouter();

  // Check if product is already in cart with the selected size
  useEffect(() => {
    if (!product) return;

    const cartItem = items.find(
      (item) =>
        item.product.id === product.id &&
        (selectedSize ? item.size === selectedSize : !item.size)
      // (selectedColor ? item.color === selectedColor : !item.color)
    );

    if (cartItem) {
      setIsInCart(true);
      setCartQuantity(cartItem.quantity);
    } else {
      setIsInCart(false);
      setCartQuantity(0);
    }
  }, [items, product, selectedSize]);

  // Update quantity state when size or color changes or cart updates
  useEffect(() => {
    if (isInCart) {
      setQuantity(cartQuantity);
    } else {
      setQuantity(0);
    }
  }, [isInCart, cartQuantity, selectedSize]);

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity <= 0) {
      // Remove from cart if quantity is 0
      if (product) {
        removeFromCart(product.id, selectedSize);
      }
      setIsInCart(false);
      setQuantity(1);
    } else {
      // Update quantity in cart
      if (product) {
        updateQuantity(product.id, newQuantity, selectedSize);
      }
      setQuantity(newQuantity);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 pb-16 pt-28 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Link
          href="/"
          onClick={() => router.push("/")}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  // Combine main image with additional images for the gallery
  const allImages = [product.image, ...(product.images || [])];

  // Function to handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="container mx-auto px-4 pb-14 pt-6">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-100 mb-8">
          <Link href="/products" className="hover:text-blue-500">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="#" className="hover:text-blue-500">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-700 dark:text-gray-100">
            {product.name}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Product Images */}
          <ProductImage
            product={product}
            allImages={allImages}
            currentImageIndex={currentImageIndex}
            handleThumbnailClick={handleThumbnailClick}
          />

          {/* Product Details */}
          <div>
            {product.badge && (
              <span
                className={`inline-block ${product.badge.color} text-white text-xs font-bold px-2 py-1 rounded-md mb-4`}
              >
                {product.badge.text}
              </span>
            )}

            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({product.rating}/5)
              </span>
            </div>

            {/* <div className="text-2xl font-bold mb-6">
              ${product.price.toFixed(2)}
            </div> */}

            <p className="text-gray-600 dark:text-gray-100 mb-8">
              {product.description}
            </p>

            {/* Size Selection */}
            {/* <SizeSelection
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            /> */}

            {/* <ColorSelection
              product={product}
              // selectedColor={selectedColor}
              // setSelectedColor={setSelectedColor}
            /> */}
            {/* Quantity */}
            <ProductQuantity
              isInCart={isInCart}
              quantity={quantity}
              setQuantity={setQuantity}
              handleUpdateQuantity={handleUpdateQuantity}
            />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={
                  isInCart
                    ? () => handleUpdateQuantity(quantity)
                    : () => addToCart(product, selectedSize)
                }
                className={`flex-1 py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors ${
                  isInCart
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                {isInCart ? "Update Cart" : "Add to Cart"}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(product.id);
                }}
                style={{ pointerEvents: "auto" }}
                className={`flex items-center justify-center gap-2 py-3 px-6 rounded-md border ${
                  favorites.includes(product.id)
                    ? "bg-red-50 border-red-200 text-red-500"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <Heart
                  className={`h-5 w-5 ${
                    favorites.includes(product.id) ? "fill-red-500" : ""
                  }`}
                />
                {favorites.includes(product.id)
                  ? "Favorited"
                  : "Add to Favorites"}
              </button>
            </div>

            {/* Product Features */}
            <div className="border-t pt-6">
              <h3 className="font-bold mb-4">Product Features</h3>
              <ul className="space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                      <svg
                        className="h-3 w-3 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <Truck className="h-6 w-6 text-gray-400" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-gray-500">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-6 w-6 text-gray-400" />
                <div>
                  <p className="font-medium">Easy Returns</p>
                  <p className="text-sm text-gray-500">30 day return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-gray-400" />
                <div>
                  <p className="font-medium">Secure Checkout</p>
                  <p className="text-sm text-gray-500">100% protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts relatedProducts={relatedProducts} />
      </div>
    </>
  );
};

export default ProductClient;
