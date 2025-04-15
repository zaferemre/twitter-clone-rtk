import React from "react";
import { SidebarContainer } from "./FollowingsBar.styled.tsx";
import FollowingsSideBar from "../FollowingsSideBar/index.tsx";

const FollowingsBar = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <SidebarContainer isVisible={isVisible}>
      <h2>Followings</h2>
      <FollowingsSideBar />
    </SidebarContainer>
  );
};

export default FollowingsBar;
