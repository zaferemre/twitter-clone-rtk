import React from "react";
import styled from "styled-components";
import UserSelector from "../../components/UserSelector/index.tsx";
import { Container } from "./LoginPage.styled.tsx";
import Login from "../../components/Login/index.tsx";

const LoginPage = () => {
  return (
    <Container>
      <Login />
    </Container>
  );
};

export default LoginPage;
