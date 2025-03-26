import React from "react";
import Sidebar from "../Sidebar/index.tsx";
import { LayoutWrapper, ContentArea } from "./DashboardLayout.styled.tsx";
import LikedPostsBar from "../LikedPostsBar/index.tsx";
import PostList from "../../features/posts/components/PostList/index.tsx";
import LikedList from "../../features/posts/components/LikedList/index.tsx";
import { useAppSelector } from "../../app/hooks.ts";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const active = useAppSelector((state) => state.ui.activeSidebarView);

  return (
    <LayoutWrapper>
      <Sidebar />

      <LikedPostsBar isVisible={active === "liked"}>
        <LikedList />
      </LikedPostsBar>

      <ContentArea isShifted={active === "liked"}>{children}</ContentArea>
    </LayoutWrapper>
  );
};

export default DashboardLayout;
