import React from "react";
import { Product, products } from "../../productList";
import Image from "next/image";
const Products: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between gap-8 p-4">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={product.imageURL}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-lg text-green-500 mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-72 h-46 bg-gray-300 flex items-center justify-center">
          Second Container
        </div>
      </div>
    </div>
  );
};
console.log(products); // Should output an array of Product objects

export default Products;
