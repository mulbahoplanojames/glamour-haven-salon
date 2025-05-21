import { Check } from "lucide-react";
import React from "react";

interface ProductQuantityProps {
  isInCart: boolean;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleUpdateQuantity: (quantity: number) => void;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  isInCart,
  quantity,
  setQuantity,
  handleUpdateQuantity,
}) => {
  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Quantity</h3>
          {isInCart && (
            <span className="text-sm text-green-600 flex items-center gap-1">
              <Check className="h-4 w-4" />
              In your cart
            </span>
          )}
        </div>
        <div className="flex items-center">
          <button
            onClick={() =>
              isInCart
                ? handleUpdateQuantity(quantity - 1)
                : setQuantity((prev) => Math.max(1, prev - 1))
            }
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            type="text"
            min="1"
            value={quantity}
            onChange={(e) => {
              const newQuantity = Math.max(
                0,
                Number.parseInt(e.target.value) || 0
              );
              if (isInCart) {
                handleUpdateQuantity(newQuantity);
              } else {
                setQuantity(newQuantity);
              }
            }}
            className="w-16 h-10 border-t border-b border-gray-300 text-center"
            aria-label="Quantity"
          />
          <button
            onClick={() =>
              isInCart
                ? handleUpdateQuantity(quantity + 1)
                : setQuantity((prev) => prev + 1)
            }
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductQuantity;
