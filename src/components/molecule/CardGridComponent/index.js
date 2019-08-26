import React from "react";
import CardComponent from "../CardComponent";

const CardGridComponent = ({ orderList, addItem }) => {
  return (
    <div className="row">
      {orderList.map((menuItem, orderIdx) => {
        return (
          <CardComponent key={orderIdx} menuItem={menuItem} add={addItem} />
        );
      })}
    </div>
  );
};

export default CardGridComponent;
