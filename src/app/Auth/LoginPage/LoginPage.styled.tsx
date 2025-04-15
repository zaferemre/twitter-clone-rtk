import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftPane = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

const RightPane = styled.div`
  width: 50%;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/login-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;

  @media (max-width: 768px) {
    opacity: 0.25;
    filter: blur(4px);
  }
`;

export { Container, LeftPane, RightPane, BgImage };
