import { Fragment, useContext } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import itemsContext from "./store/items-context";
import Users from "./pages/Users";
import Admin from "./pages/Admin";

function App() {
  const itemsCtx = useContext(itemsContext);
  return (
    <Fragment>
      <h1 className="App">Hello World</h1>
      {itemsCtx.switchPage ? <Users /> : <Admin />}
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <footer>
        <h6 className="App">
          this is footer
          <Link to={`/`} className="link">
            {" "}
            | home
          </Link>
        </h6>
      </footer>
    </Fragment>
  );
}

export default App;
