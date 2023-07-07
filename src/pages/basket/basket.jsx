import React, { useContext, useEffect } from "react";
import { BasketContext } from "../../contexts/basket.context";

const Basket = () => {
  const { items, setItems, removeFromBasket } = useContext(BasketContext);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("basketItems"));
    setItems(storedItems);
  }, []);

  return (
    <section className="py-20 pt-28 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Basket</h2>
        {items?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-xs font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  ${item.price.toFixed(2)}
                </p>
                <button
                  className="mt-2 text-sm text-red-500 hover:text-red-600"
                  onClick={removeFromBasket.bind(null, item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-700 mb-4">Your basket is empty.</p>
        )}
      </div>
    </section>
  );
};

export default Basket;
