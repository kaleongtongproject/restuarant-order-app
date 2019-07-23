import React from "react";
import styled from "styled-components";
import { ImageHolder } from "../../atom/ImageComponent";

const NavigationStyled = styled.nav`
  position: fixed;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid grey;
  width: 100%;
  box-shadow: 0 -2px 6px 0 black;
  z-index: 99;
  background-color: white;
  .image-div {
    position: absolute;
    width: 70px;
    height: 60px;
    top: 10px;
    left: 10px;
  }
`;

const NavigationIcon = styled(ImageHolder)`
  width: 80px;
  height: 80px;
`;

const NavigationComponent = () => {
  const navIcon =
    "https://media-cdn.tripadvisor.com/media/photo-s/12/8b/1c/f1/our-new-logo.jpg";
  return (
    <NavigationStyled>
      <div className="navbar-desktop">
        <div className="image-div">
          <NavigationIcon src={navIcon} alt="Navigation Icon" />
        </div>
        <div className="left-navigation" />
        <div className="right-navigation" />
      </div>
    </NavigationStyled>
  );
};

export default NavigationComponent;
