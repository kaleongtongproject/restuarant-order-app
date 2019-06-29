import React from "react";
import styled from "styled-components";
import CardComponent from "../CardComponent";
import "./styles.scss";

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
