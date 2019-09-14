import React from "react";
import styled from "styled-components";
import CartItem from "../../atom/CartItemComponent";
import ButtonComponent from "../../atom/ButtonComponent";

const Button = styled(ButtonComponent)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const SideBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 200px;
  height: 100%;
  padding: 10px;
  padding-top: 70px;
  background-color: #ffffff;
  z-index: 10;
  border: 1px solid #000000;
`;

export const ShoppingSideBar = ({ dispatch, state, items }) => {
  const submitOrder = () => console.log(state);
  return (
    <div>
      {Object.keys(state).map(key => {
        const item = items.find(v => v.id === key);
        return state[key] > 0 ? (
          <CartItem
            key={key}
            item={item}
            count={state[key]}
            dispatch={dispatch}
          />
        ) : null;
      })}
      {!!Object.keys(state).length && (
        <Button onClickHandler={submitOrder}>Submit Order</Button>
      )}
    </div>
  );
};

export default ShoppingSideBar;
