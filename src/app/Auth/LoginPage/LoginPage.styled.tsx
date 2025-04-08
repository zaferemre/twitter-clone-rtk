import styled from "styled-components";

// Full-page container
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

// Left half (form, login UI)
const LeftPane = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  z-index: 1; // above BgImage if used
`;

// Right half (optional image/graphic)
const RightPane = styled.div`
  width: 50%;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Optional background image (behind everything)
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
`;

export { Container, LeftPane, RightPane, BgImage };
