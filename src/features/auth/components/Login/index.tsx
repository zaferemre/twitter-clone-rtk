import React from "react";

import {
  Container,
  BgImage,
  LeftPane,
  PageLayout,
  RightPane,
  Content,
} from "./Login.styled.tsx";

const Login = () => {
  return (
    <PageLayout>
      <BgImage />
      <LeftPane>
        <Content>Content</Content>
      </LeftPane>
    </PageLayout>
  );
};

export default Login;
