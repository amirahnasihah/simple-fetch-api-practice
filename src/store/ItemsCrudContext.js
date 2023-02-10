// CRUD
import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/itemsData";
import axios from "axios";

const itemsCrudContext = createContext();

export function ItemsCrudContextProvider({ children }) {
  const [itemsData, setItemsData] = useState([]);
  const [items, setItems] = useState([]);
  const totalAmount = items.reduce(
    (totalAmount, { price = 0 }) => totalAmount + price,
    0
  );

  // RETRIEVE items data from api
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/photos");
    setItemsData(result.data);
  };

  // VALUE
  const value = { itemsData, setItemsData };

  return (
    <itemsCrudContext.Provider value={value}>
      {children}
    </itemsCrudContext.Provider>
  );
}

export function useItemsCrud() {
  return useContext(itemsCrudContext);
}
