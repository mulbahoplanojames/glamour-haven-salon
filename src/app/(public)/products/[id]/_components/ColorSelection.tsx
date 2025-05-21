interface Product {
  colors: string[];
}

interface SizeSelectionProps {
  product: Product;
  selectedColor: string | undefined;
  setSelectedColor: (color: string) => void;
}

const ColorSelection: React.FC<SizeSelectionProps> = ({
  product,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <>
      {product.colors && product.colors.length > 0 && (
        <div className="mb-6">
          <h3 className="font-medium mb-2">Select Color</h3>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{ background: `${color}` }}
                className={`w-6 h-6 border rounded-full ${
                  selectedColor === color
                    ? "border-4 bg-blue-50 text-blue-700"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                {/* {color} */}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ColorSelection;
