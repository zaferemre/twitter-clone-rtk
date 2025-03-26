import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

export { LayoutWrapper };

interface ContentProps {
  isShifted: boolean;
}

export const ContentArea = styled.main<ContentProps>`
  flex: 1;
  transition: transform 0.3s ease;
  transform: ${({ isShifted }) =>
    isShifted ? "translateX(0)" : "translateX(-400px)"};
  will-change: transform;
`;
