import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background-color: #f00;
`;

export const ShoppingSideBar = () => <SideBarWrapper />;

export default ShoppingSideBar;
