import { createContext } from "react";

const cartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (items) => {},
  removeItem: (id) => {},
});

export default cartContext;
