import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import styled from "styled-components";
import ButtonComponent from "./components/atom/ButtonComponent";
import ImageComponent from "./components/atom/ImageComponent";
import CardComponent from "./components/molecule/CardComponent";
const handleButtonClick = () => {
  console.log("I was clicked");
};

const ButtonItem = styled(ButtonComponent)`
  width: 200px;
`;

const SecondImageComponent = styled(ImageComponent)`
  width: 200px;
`;

function App() {
  const menuItem = {
    name: "burger",
    price: "499",
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
    preparationTime: "20 minutes",
    description: "it is amazingly delicious"
  };

  return (
    <div className="container">
      <ButtonComponent
        backgroundColor="blue"
        text="Click Me"
        buttonColor="white"
        onClickHandler={handleButtonClick}
      >
        <span>Click Me</span>
      </ButtonComponent>
      <ButtonItem>Answer Me</ButtonItem>

      <SecondImageComponent borderRadius="50%" />
      <ImageComponent />
      <CardComponent menuItem={menuItem} />
    </div>
  );
}

export default App;
