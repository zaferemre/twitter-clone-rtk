import React from "react";
import {
  SidebarContainer,
  LikedPostsContent,
} from "./LikedPostsBar.styled.tsx";

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
}

const LikedPostsBar = ({ children, isVisible }: Props) => {
  return (
    <SidebarContainer isVisible={isVisible}>
      <h2>Liked Posts</h2>
      <LikedPostsContent>{children}</LikedPostsContent>
    </SidebarContainer>
  );
};

export default LikedPostsBar;
