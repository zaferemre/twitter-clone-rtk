import React from "react";
import {
  Container,
  LeftPane,
  RightPane,
  BgImage,
} from "./LoginPage.styled.tsx";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks.ts";
import LoginForm from "../../components/LoginForm/index.tsx";
import GoogleLoginButton from "../../components/GoogleLoginButton/index.tsx";
import JsonUserDropdown from "../../components/JSONUserDropdown/index.tsx";

const LoginPage = () => {
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate("/posts");
    }
  }, [user, navigate]);
  return (
    <Container>
      <BgImage />
      <LeftPane>
        <LoginForm />
      </LeftPane>
      <RightPane />
    </Container>
  );
};

export default LoginPage;
