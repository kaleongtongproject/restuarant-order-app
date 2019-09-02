import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 70px;
`;

const LoginComponent = ({ authenticate, history }) => {
  const login = () =>
    authenticate(() => {
      history.push("/");
    });

  return (
    <Wrapper>
      <button onClick={login}>Log in</button>
    </Wrapper>
  );
};

export default LoginComponent;
