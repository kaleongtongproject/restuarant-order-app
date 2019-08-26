import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 4px;
  background-color: ${props =>
    props.background ? props.background : "#FFFFFF"};
  color: ${props => props.buttonColor};
  padding: 10px;
  width: 100px;
  &:hover {
    opacity: 0.75;
  }
`;

const ButtonComponent = ({
  backgroundColor,
  onClickHandler,
  children,
  buttonColor,
  className
}) => {
  return (
    <div className="button-div">
      <StyledButton
        className={className}
        background={backgroundColor}
        buttonColor={buttonColor}
        onClick={onClickHandler}
      >
        {children}
      </StyledButton>
    </div>
  );
};

export default ButtonComponent;
