import { Product } from "@/types/product-type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedProducts = ({
  relatedProducts,
}: {
  relatedProducts: Product[];
}) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((relatedProduct) => (
              <Link
                href={`/products/${relatedProduct.id}`}
                key={relatedProduct.id}
                className="group"
              >
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-scale group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium group-hover:text-blue-500 transition-colors">
                  {relatedProduct.name}
                </h3>
                <p className="text-gray-500">
                  ${relatedProduct.price.toFixed(2)}
                </p>
              </Link>
            ))
          ) : (
            <p>No related products found, please check back later.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
