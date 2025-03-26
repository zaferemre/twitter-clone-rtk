import React from "react";
import { useAppSelector } from "../../../../app/hooks.ts";
import { RootState } from "../../../../app/store.ts";
import DashboardLayout from "../../../../components/DashboardLayout/index.tsx";

import PostList from "../../components/PostList/index.tsx";

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
