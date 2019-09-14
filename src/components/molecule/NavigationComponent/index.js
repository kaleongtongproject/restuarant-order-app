import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUser,
  faFileExcel
} from "@fortawesome/free-solid-svg-icons";

import { ImageHolder } from "../../atom/ImageComponent";

const TopNavigationStyled = styled.nav`
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

const LeftNavigationStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 200px;
  height: 100%;
  z-index: 99;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  justify-content: start;
  .nav-links {
    padding: 20px;
    font-size: 20px;
    > a {
      color: #333;
      display: block;
      margin-bottom: 20px;
      text-decoration: none;
      &:hover {
        color: #222;
        font-weight: bold;
      }
    }
  }
`;

const NavigationIcon = styled(ImageHolder)`
  height: 150px;
`;

const FAIcon = styled(FontAwesomeIcon)`
  margin: 10px;
`;

const getNavLinks = () => {
  const listNavLinks = ["Dashboard", "Menu", "Dining Areas"];
  return (
    <>
      {listNavLinks.map(link => (
        <a key={link} href={link}>
          {" "}
          {link}{" "}
        </a>
      ))}
    </>
  );
};

const NavigationComponent = props => {
  const { toggleShoppingSideBar, toggleUserSideBar } = props;
  const navIcon =
    "https://media-cdn.tripadvisor.com/media/photo-s/12/8b/1c/f1/our-new-logo.jpg";

  return props.isLeftSide ? (
    <LeftNavigationStyled>
      <NavigationIcon src={navIcon} alt="Navigation Icon" />
      {props.children}
      <div className="nav-links">{getNavLinks()}</div>
    </LeftNavigationStyled>
  ) : (
    <TopNavigationStyled>
      <FAIcon icon={faShoppingBag} size="3x" onClick={toggleShoppingSideBar} />
      <NavigationIcon src={navIcon} alt="Navigation Icon" />
      <FAIcon icon={faUser} size="3x" onClick={toggleUserSideBar} />
    </TopNavigationStyled>
  );
};

export default NavigationComponent;
