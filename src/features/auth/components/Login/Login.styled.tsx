import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const PageLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LeftPane = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightPane = styled.div`
  width: 50%;
`;

const BgImage = styled.div`
  background-image: url("/login-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;
const Content = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { Container, Content, BgImage, PageLayout, LeftPane, RightPane };
