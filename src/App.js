import React, { useEffect, useState, useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import CardGridComponent from "./components/molecule/CardGridComponent";
import NavigationComponent from "./components/molecule/NavigationComponent";
import ShoppingSideBar from "./components/molecule/ShoppingSideBarComponent";
import UserSideBar from "./components/molecule/UserSideBarComponent";
import { initialCartState, cartReducer } from "./reducers/cartReducer";
import RegisterComponent from "./components/molecule/RegisterComponent";
import LoginComponent from "./components/molecule/LoginComponent";
const data = require("./data.json");

function App() {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    setOrderList(data.data);
  }, []);

  const [shoppingSideBarOpen, setShoppingSideBarOpen] = useState(false);
  const toggleShoppingSideBar = () =>
    setShoppingSideBarOpen(!shoppingSideBarOpen);

  const [userSideBarOpen, setUserSideBarOpen] = useState(false);
  const toggleUserSideBar = () => setUserSideBarOpen(!userSideBarOpen);

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const addItem = id => cartDispatch({ type: "add", payload: { id } });

  return (
    <BrowserRouter>
      <div className="container">
        <NavigationComponent
          toggleShoppingSideBar={toggleShoppingSideBar}
          toggleUserSideBar={toggleUserSideBar}
        />
        <Route path="/register" component={RegisterComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route
          exact
          path="/"
          render={() => (
            <div className="content">
              {shoppingSideBarOpen && (
                <ShoppingSideBar
                  state={cartState}
                  items={orderList}
                  dispatch={cartDispatch}
                />
              )}
              {userSideBarOpen && <UserSideBar />}
              <CardGridComponent orderList={orderList} addItem={addItem} />
            </div>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
