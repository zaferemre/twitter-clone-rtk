import React from "react";
import { useAppSelector } from "../../../../app/hooks.ts";
import { RootState } from "../../../../app/store.ts";

const PostsPage = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  if (!user) {
    return <div>Please log in to view posts.</div>;
  } else {
    return <h1>Welcome, {user?.name}!</h1>;
  }
};

export default PostsPage;
