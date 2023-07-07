import React, { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToBasket = (item) => {
    setItems((prevItems) => [...prevItems, item]);
    window.localStorage.setItem(
      "basketItems",
      JSON.stringify([...items, item])
    );
  };

  const removeFromBasket = (itemId) => {
    setItems((prevItems) => {
      const indexToRemove = prevItems.findIndex((item) => item.id === itemId);
      if (indexToRemove !== -1) {
        const updatedItems = [...prevItems];
        updatedItems.splice(indexToRemove, 1);
        window.localStorage.setItem(
          "basketItems",
          JSON.stringify(updatedItems)
        );
        return updatedItems;
      }
      return prevItems;
    });
  };

  const clearBasket = () => {
    setItems([]);
    window.localStorage.removeItem("basketItems", items);
  };

  return (
    <BasketContext.Provider
      value={{ items, setItems, addToBasket, removeFromBasket, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
