import { createContext } from "react";

const itemsContext = createContext({
  itemsData: [],
  switchPage: null,
  addNewItem: (item) => {},
  updateNewItem: (id) => {},
  removeNewItem: (id) => {},
  togglePage: () => {},
});

export default itemsContext;
