import React from "react";
import { useAppSelector } from "../../redux/hooks.ts";
import { RootState } from "../../redux/store.ts";
import DashboardLayout from "../../../components/Layout/DashboardLayout/index.tsx";

import PostList from "../../../components/posts/PostList/index.tsx";

const PostsPage = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  if (!user) {
    return <div>Please log in to view posts.</div>;
  } else {
    return (
      <DashboardLayout>
        <PostList />
      </DashboardLayout>
    );
  }
};

export default PostsPage;
