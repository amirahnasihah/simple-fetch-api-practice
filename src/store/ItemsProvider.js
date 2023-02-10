// CRUD
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const itemsCrudContext = createContext();

export function ItemsCrudContextProvider({ children }) {
  const [itemsData, setItemsData] = useState([]);
  const [switchPage, setSwitchPage] = useState(null);

  // RETRIEVE items data from api
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/photos");
    setItemsData(result.data);
  };

  const addNewItem = (item) => {};
  const updateNewItem = (id) => {};
  const removeNewItem = (id) => {};
  const togglePage = () => {};

  // VALUE
  const value = {};

  return (
    <itemsCrudContext.Provider value={value}>
      {children}
    </itemsCrudContext.Provider>
  );
}

export function useItemsCrud() {
  return useContext(itemsCrudContext);
}
