import React, { useState } from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout/index.tsx";
import PostList from "../../../components/posts/PostList/index.tsx";
import AlbumList from "../../../components/Albums/AlbumList/index.tsx";
import {
  MobileTabs,
  TabButton,
  MobileOnly,
  DesktopOnly,
} from "./PostsPage.styled.tsx";

const PostsPage = () => {
  const [activeTab, setActiveTab] = useState<"posts" | "albums">("posts");

  return (
    <DashboardLayout>
      {/* Full-width top nav bar on mobile */}
      <MobileTabs>
        <TabButton
          active={activeTab === "posts"}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </TabButton>
        <TabButton
          active={activeTab === "albums"}
          onClick={() => setActiveTab("albums")}
        >
          Albums
        </TabButton>
      </MobileTabs>

      {/* Conditional content on mobile */}
      <MobileOnly>
        {activeTab === "posts" ? <PostList /> : <AlbumList />}
      </MobileOnly>

      {/* Both shown on desktop */}
      <DesktopOnly>
        <PostList />
        <AlbumList />
      </DesktopOnly>
    </DashboardLayout>
  );
};

export default PostsPage;
