import React, { useEffect, useState } from "react";
import "./App.scss";
import CardGridComponent from "./components/molecule/CardGridComponent";

const data = require("./data.json");
function App() {
  let [orderList, setOrderList] = useState([]);
  useEffect(() => {
    orderList = setOrderList(data.data);
  }, []);
  return (
    <div className="container">
      <CardGridComponent orderList={orderList} />
    </div>
  );
}

export default App;
