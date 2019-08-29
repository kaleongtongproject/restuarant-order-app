import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 200px;
  height: 100%;
  padding: 10px;
  padding-top: 70px;
  background-color: #ffffff;
  z-index: 10;
  border: 1px solid #000000;
`;

export const UserSideBar = () => {
  return <SideBarWrapper />;
};

export default UserSideBar;
