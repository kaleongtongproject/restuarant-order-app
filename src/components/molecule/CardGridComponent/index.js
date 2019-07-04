import React from "react";
import CardComponent from "../CardComponent";

const CardGridComponent = ({ orderList }) => {
  return (
    <div className="row">
      {orderList.map((order, orderIdx) => {
        const menuItem = {
          name: order.name,
          calories: order.calories,
          thumb: order.thumb,
          time: order.time,
          headline: order.headline
        };
        return <CardComponent menuItem={menuItem} />;
      })}
    </div>
  );
};

export default CardGridComponent;
