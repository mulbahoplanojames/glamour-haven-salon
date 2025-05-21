import React from "react";

interface Product {
  sizes: string[];
}

interface SizeSelectionProps {
  product: Product;
  selectedSize: string | undefined;
  setSelectedSize: (size: string) => void;
}

const SizeSelection: React.FC<SizeSelectionProps> = ({
  product,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <>
      {product.sizes && product.sizes.length > 0 && (
        <div className="mb-6">
          <h3 className="font-medium mb-2">Select Size</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-md ${
                  selectedSize === size
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SizeSelection;
