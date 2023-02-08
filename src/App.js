import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ItemsCrudContextProvider } from "./context/ItemsCrudContext";
import Meals from "./components/Meals";
import Store from "./pages/store";
import Cart from "./pages/cart";

function App(props) {
  return (
    <div>
      <h1 className="App">Hello World</h1>
      <ItemsCrudContextProvider>
        <Routes>
          <Route path="/" {...props} element={<Store />} />
          <Route path="/store" {...props} element={<Meals />} />
          <Route path="/cart" {...props} element={<Cart />} />
        </Routes>
      </ItemsCrudContextProvider>
      <footer>
        <h6 className="App">this is footer</h6>
      </footer>
    </div>
  );
}

export default App;
