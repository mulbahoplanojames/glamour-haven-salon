import Image from "next/image";
import React from "react";

interface ProductImageProps {
  product: { name: string };
  allImages: string[];
  currentImageIndex: number;
  handleThumbnailClick: (index: number) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
  product,
  allImages,
  currentImageIndex,
  handleThumbnailClick,
}) => {
  return (
    <>
      <div>
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <Image
            src={allImages[currentImageIndex] || "/placeholder.svg"}
            alt={`${product.name} - View ${currentImageIndex + 1}`}
            width={600}
            height={600}
            className="w-full h-full object-scale"
          />
        </div>
        <div className="grid grid-cols-6 gap-4">
          {allImages.map((image, index) => (
            <div
              key={index}
              className={`aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity ${
                currentImageIndex === index ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} view ${index + 1}`}
                width={150}
                height={150}
                className="w-full h-full object-scale"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImage;
