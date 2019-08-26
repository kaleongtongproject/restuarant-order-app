import React from "react";
import styled from "styled-components";
import CartItem from "../../atom/CartItemComponent";

const SideBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100px;
  height: 100%;
  padding: 10px;
  padding-top: 70px;
  background-color: #ffffff;
  z-index: 10;
  border: 1px solid #000000;
`;

export const ShoppingSideBar = ({ dispatch, state, items }) => {
  return (
    <SideBarWrapper>
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
    </SideBarWrapper>
  );
};

export default ShoppingSideBar;
