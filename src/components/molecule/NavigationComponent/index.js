import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";

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
  display: flex;
  justify-content: space-between;
`;

const NavigationIcon = styled(ImageHolder)`
  height: 60px;
`;

const FAIcon = styled(FontAwesomeIcon)`
  margin: 10px;
`;

const NavigationComponent = props => {
  const navIcon =
    "https://media-cdn.tripadvisor.com/media/photo-s/12/8b/1c/f1/our-new-logo.jpg";

  return (
    <NavigationStyled>
      <FAIcon icon={faShoppingBag} size="3x" />
      <NavigationIcon src={navIcon} alt="Navigation Icon" />
      <FAIcon icon={faUser} size="3x" />
    </NavigationStyled>
  );
};

export default NavigationComponent;
