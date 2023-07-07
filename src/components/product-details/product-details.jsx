import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../mocks/products";
import Breadcrumb from "../breadcrumb/breadcrumb";
import { BasketContext } from "../../contexts/basket.context";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToBasket } = useContext(BasketContext);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  const items = [{ text: "Home", link: "/" }];

  useEffect(() => {
    setProduct(products.find((product) => product?.id === parseInt(productId)));
  }, [productId]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleBuy = () => {
    addToBasket(product);
  };

  return (
    <section className="py-20 pt-28 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="p-5 bg-white rounded-lg mb-6">
          <Breadcrumb items={items} activeLink={product?.title} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-5">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-full rounded-lg object-cover object-top h-[300px] md:h-[550px]"
            />
          </div>
          <div className="p-5 bg-white rounded-lg">
            <div className="border-b mb-6 flex items-center justify-between">
              <h2 className="text-2xl lg:text-2xl font-normal text-gray-700 mb-4">
                {product?.title}
              </h2>
            </div>
            <div className="flex items-center flex-wrap pb-6 border-b mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                onClick={handleBuy}
              >
                Buy now
              </button>
              <div className="flex ml-4">
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-16 text-center bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-none"
                  value={quantity}
                  readOnly
                />
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
              {product?.price && (
                <p className="text-base font-medium text-gray-900 mb-4 ml-0 mt-4 md:mt-0 md:ml-auto">
                  Narx: {product?.price}$
                </p>
              )}
            </div>
            <p className="text-gray-600 mb-10 text-sm">
              {product?.description}
            </p>
            <p className="mb-3 text-sm text-gray-600">
              Mahsulot haqida qisqacha
            </p>
            <ul className="list-disc pl-4 text-sm text-gray-600">
              {product?.benefits.map((benefit, index) => (
                <li className="mb-2" key={index}>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
