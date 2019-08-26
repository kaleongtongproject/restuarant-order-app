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

  const [shoppingSideBarOpen, setShoppingSideBarOpen] = useState(true);
  const toggleShoppingSideBar = () =>
    setShoppingSideBarOpen(!shoppingSideBarOpen);

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const addItem = id => cartDispatch({ type: "add", payload: { id } });

  return (
    <div className="container">
      <NavigationComponent toggleShoppingSideBar={toggleShoppingSideBar} />
      <div className="content">
        {shoppingSideBarOpen && (
          <ShoppingSideBar
            state={cartState}
            items={orderList}
            dispatch={cartDispatch}
          />
        )}
        <CardGridComponent orderList={orderList} addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
