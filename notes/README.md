# CRUD Shopping Cart

## Context- [CRUD Shopping Cart](#crud-shopping-cart)
- [CRUD Shopping Cart](#crud-shopping-cart)
  - [Context- CRUD Shopping Cart](#context--crud-shopping-cart)
  - [ADD onClick()](#add-onclick)
- [Pagination](#pagination)
    - [Get Current Items \& Change Page](#get-current-items--change-page)


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

# Pagination

### Get Current Items & Change Page

```javascript
const indexOfLastItems = currentPage * itemsPerPage;
const indexOfFirstItems = indexOfLastItems - itemsPerPage;
const currentItems = items.slice(indexOfFirstItems, indexOfLastItems);


const paginate = (pageNumber) => setCurrentPage(pageNumber);
```

This code defines two constants and a function in JavaScript. Here's an explanation in simple terms:

1. `const indexOfLastItems = currentPage * itemsPerPage`: This line creates a constant named "indexOfLastItems" that represents the last item in a set of items to be displayed on a single page. It does this by multiplying the value of "currentPage" with "itemsPerPage". For example, if "currentPage" is 1 and "itemsPerPage" is 10, "indexOfLastItems" would be `10`.

2. `const indexOfFirstItems = indexOfLastItems - itemsPerPage`: This line creates a constant named "indexOfFirstItems" that represents the first item in the set of items to be displayed on the current page. It does this by subtracting "itemsPerPage" from "indexOfLastItems". In the example from step 1, "indexOfFirstItems" would be `0`.

3. `const currentItems = items.slice(indexOfFirstItems, indexOfLastItems)`: This line creates a constant named "currentItems" that represents a sub-array of "items" that contains only the items to be displayed on the current page. It does this by using the "slice" method on "items", which extracts a portion of an array and returns it as a new array. The portion to be extracted is specified by the "indexOfFirstItems" and "indexOfLastItems" constants as the start and end indices of the sub-array.

4. `const paginate = (pageNumber) => setCurrentPage(pageNumber)`: This line creates a constant named "paginate" that is a function that updates the current page being displayed. The function takes a single argument named "pageNumber" and sets the value of "currentPage" to this argument using the "setCurrentPage" function. The "setCurrentPage" function is assumed to be a hook provided by a library such as React, and it updates the state of a component to reflect the new value of "currentPage".

