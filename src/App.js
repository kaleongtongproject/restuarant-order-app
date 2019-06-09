import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import ButtonComponent from './components/atom/ButtonComponent';
import ImageComponent from './components/atom/ImageComponent';

const handleButtonClick = () => {
  console.log('I was clicked');
};

const ButtonItem = styled(ButtonComponent) `
  width: 200px;
`;

const SecondImageComponent = styled(ImageComponent)`
  width: 200px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent backgroundColor="blue" text="Click Me" buttonColor="white" onClickHandler={handleButtonClick}><span>Click Me</span></ButtonComponent>
        <ButtonItem>Answer Me</ButtonItem>
        
        <SecondImageComponent borderRadius="50%"/>
        <ImageComponent />
      </header>
    </div>
  );
}

export default App;
