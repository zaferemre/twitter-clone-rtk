import styled from "styled-components";

const PANEL_WIDTH = 400;
const SIDEBAR_WIDTH = 400;

export const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

interface ContentProps {
  isShifted: boolean;
}

export const ContentArea = styled.main<ContentProps>`
  flex: 1;
  margin-left: ${({ isShifted }) =>
    isShifted
      ? `${(SIDEBAR_WIDTH + PANEL_WIDTH - 1200) / 16}rem`
      : `${(SIDEBAR_WIDTH - 1150) / 16}rem`};
  transition: margin-left 0.3s ease;
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 48rem) {
    margin-left: -50rem;
  }
`;

export const ContentGrid = styled.div`
  gap: 2rem;
  width: 100%;
  align-items: flex-start;
`;
export const HeaderShower = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const SidebarShower = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
