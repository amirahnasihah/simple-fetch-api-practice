# CRUD Shopping Cart

## Context

```javascript
// CRUD
import { createContext, useContext, useState } from "react";
import api from "../api/itemsData";

const itemsCrudContext = createContext();

export function ItemsCrudContextProvider({ children }) {
  const [itemsData, setItemsData] = useState([]);
  const [switchPage, setSetPage] = useState();
  //   addNewItem: (item) => {},
  //   removeItem: (id) => {},
  //   updateItem: (id) => {},
  //   togglePage: () => {},

  // RETRIEVE items data from api
  const getItemsData = async () => {
    const response = await api.get("/itemsData");
    if (response.data) setItemsData(response.data);
  };

 

  // VALUE
  const value = {
    itemsData,
    setItemsData,
    getItemsData,
    addNewItem,
  };

  return (
    <itemsCrudContext.Provider value={value}>
      {children}
    </itemsCrudContext.Provider>
  );
}

export function useItemsCrud() {
  return useContext(itemsCrudContext);
}
```

## ADD onClick()

```javascript
// Context.js
const addNewItem = async (item) => {
  // console.log("addNewItem props:", item);
  const request = { ...item };

  const response = await api.post("/itemsData", request);
  console.log("addNewItem response:", response);
  setItemsData([...itemsData, response.data]);
};

  const value = {
    itemsData,
    setItemsData,
    addNewItem,
  };


// MealsItem.js
const { addNewItem, itemsData, setItemsData } = useItemsCrud();

const add = (item) => {
  console.log("add", item); // id: 2, name: 'huhgak', description: 'Lorem Ipsum'
  setItemsData((currentItems) => [...currentItems, item]);
};

return <button type="submit" onClick={() => add(item)}> add </button>
```

This is a JavaScript arrow function that defines a constant named "add". The function takes a single argument named "item" and performs the following actions:

1. `console.log("add", item)`: This line logs the string "add" followed by the value of the argument `"item"` to the console. The logged value will depend on the actual value passed to the `"item"` argument.

2. `setItemsData((currentItems) => [...currentItems, item])`: This line updates the state of a component using the `"setItemsData"` function, which is assumed to be a hook provided by React or some other library. The `"setItemsData"` function takes a callback as its argument, which receives the current value of `"itemsData"` as an argument and returns a new value for `"itemsData"`. The new value is created by spreading the current value of `"itemsData"` into a new array and then appending the `"item"` argument to it. This effectively adds the `"item"` argument to the end of the `"itemsData"` array and updates the state.