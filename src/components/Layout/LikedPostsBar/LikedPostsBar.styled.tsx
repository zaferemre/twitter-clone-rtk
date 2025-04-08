import styled from "styled-components";

export const SidebarContainer = styled.div<{ isVisible: boolean }>`
  width: 400px;
  background-color: #6b0001;
  padding: 1rem;
  transition: transform 0.3s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(-100%)"};
  z-index: 1;
  position: relative;
  flex-shrink: 0;
  will-change: transform;
  h2 {
    color: white;
    margin-bottom: 1rem;
  }
`;

export const LikedPostsContent = styled.div`
  margin-top: 1rem;
  overflow-y: auto;
  height: calc(100vh - 4rem);
`;
