import React from "react";
import CardComponent from "../CardComponent";

const CardGridComponent = ({ orderList, state, dispatch }) => {
  return (
    <div className="row">
      {orderList.map((menuItem, orderIdx) => {
        const cartItem = state ? state[menuItem.id] : null;
        return (
          <CardComponent
            key={orderIdx}
            menuItem={menuItem}
            cartItem={cartItem}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
};

export default CardGridComponent;
