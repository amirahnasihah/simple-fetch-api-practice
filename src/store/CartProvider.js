// CRUD
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const cartCrudContext = createContext();

export function CartCrudContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // items: [], useState
  // totalAmount: 0,
  // addItem: (item) => {},
  // removeItem: (id) => {},

  // RETRIEVE items data from api
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/photos");
    setItems(result.data);
  };

  const addItem = (item) => {};
  const removeItem = (id) => {};

  // VALUE
  const value = { items, totalAmount, addItem, removeItem };

  return (
    <cartCrudContext.Provider value={value}>
      {children}
    </cartCrudContext.Provider>
  );
}

export function useCartCrud() {
  return useContext(cartCrudContext);
}
