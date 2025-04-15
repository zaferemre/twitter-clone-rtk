import React from "react";
import Sidebar from "../Sidebar/index.tsx";
import {
  LayoutWrapper,
  ContentArea,
  ContentGrid,
} from "./DashboardLayout.styled.tsx";
import LikedPostsBar from "../LikedPostsBar/index.tsx";
import LikedList from "../../../components/posts/LikedList/index.tsx";
import FollowingsBar from "../FollowingsBar/index.tsx";
import { useAppSelector } from "../../../app/redux/hooks.ts";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const active = useAppSelector((state) => state.ui.activeSidebarView);

  const isPanelOpen = active === "liked" || active === "followings";

  return (
    <LayoutWrapper>
      <Sidebar />

      <LikedPostsBar isVisible={active === "liked"}>
        <LikedList />
      </LikedPostsBar>
      <FollowingsBar isVisible={active === "followings"} />
      <ContentArea isShifted={isPanelOpen}>
        <ContentGrid>{children}</ContentGrid>
      </ContentArea>
    </LayoutWrapper>
  );
};

export default DashboardLayout;
