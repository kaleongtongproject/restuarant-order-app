import React, { useEffect, useState } from "react";
import "./App.scss";
import CardGridComponent from "./components/molecule/CardGridComponent";
import NavigationComponent from "./components/molecule/NavigationComponent";
const data = require("./data.json");
function App() {
  let [orderList, setOrderList] = useState([]);
  useEffect(() => {
    orderList = setOrderList(data.data);
  }, []);
  return (
    <div className="container">
      <NavigationComponent />
      <div className="content">
        <CardGridComponent orderList={orderList} />
      </div>
    </div>
  );
}

export default App;
