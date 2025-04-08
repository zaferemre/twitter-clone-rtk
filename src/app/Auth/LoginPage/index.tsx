import React from "react";
import {
  Container,
  LeftPane,
  RightPane,
  BgImage,
} from "./LoginPage.styled.tsx";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks.ts";
import LoginForm from "../../../components/Auth/LoginForm/index.tsx";

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
