import React, { useEffect, useState, useReducer } from "react";
import "./App.scss";
import CardGridComponent from "./components/molecule/CardGridComponent";
import NavigationComponent from "./components/molecule/NavigationComponent";
import ShoppingSideBar from "./components/molecule/ShoppingSideBarComponent";
import { initialCartState, cartReducer } from "./reducers/cartReducer";
const data = require("./data.json");

function App() {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    setOrderList(data.data);
  }, []);

  const [shoppingSideBarOpen, setShoppingSideBarOpen] = useState(false);
  const toggleShoppingSideBar = () =>
    setShoppingSideBarOpen(!shoppingSideBarOpen);

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  return (
    <div className="container">
      <NavigationComponent toggleShoppingSideBar={toggleShoppingSideBar} />
      <div className="content">
        {shoppingSideBarOpen && (
          <ShoppingSideBar state={cartState} dispatch={cartDispatch} />
        )}
        <CardGridComponent orderList={orderList} cartDispatch={cartDispatch} />
      </div>
    </div>
  );
}

export default App;
