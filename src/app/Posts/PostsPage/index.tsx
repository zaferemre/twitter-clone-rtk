import React from "react";

import DashboardLayout from "../../../components/Layout/DashboardLayout/index.tsx";

import PostList from "../../../components/posts/PostList/index.tsx";

const PostsPage = () => {
  return (
    <DashboardLayout>
      <PostList />
    </DashboardLayout>
  );
};
export default PostsPage;
