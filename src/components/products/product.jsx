import React from "react";
import { FaStar } from "react-icons/fa";
import { products } from "../../mocks/products";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Mahsulotlar</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="border border-gray-200 rounded flex flex-col"
            >
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                width="230"
                height="300"
                className="w-full rounded-t h-[200px] md:h-[300px] mb-2"
              />
              <div className="flex flex-col justify-between p-2 md:p-4 flex-1">
                <div>
                  <h3 className="text-xs font-medium mb-1">{product.title}</h3>
                  <div className="flex items-center mb-1">
                    {Array.from({ length: product.rating }).map((_, index) => (
                      <FaStar key={index} className="text-yellow-500 mr-1" />
                    ))}
                  </div>
                  {product.installments && (
                    <p className="text-xs text-gray-600 mb-1">
                      Pay in installments: $
                      {product.installmentPrice.toFixed(2)}
                    </p>
                  )}
                </div>
                <div className="mt-auto">
                  <p className="text-base font-bold text-gray-800">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
