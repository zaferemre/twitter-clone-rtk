import React from "react";
import { useGetPostsQuery } from "../../../app/redux/services/postApi.ts";
import PostCard from "../../posts/PostCard/index.tsx";
import { Post, User } from "../../../types/types";
import { Feed } from "./UserPostList.styled.tsx";
import { useGetUsersQuery } from "../../../app/redux/services/authApi.ts";

const UserPostList = ({ userId }: { userId: number }) => {
  const { data: posts } = useGetPostsQuery();
  const { data: users } = useGetUsersQuery();

  const author: User | undefined = users?.find((u) => u.id === userId);

  if (!author) return null;

  return (
    <Feed>
      {posts
        ?.filter((post: Post) => post.userId === userId)
        .map((post: Post) => (
          <PostCard key={post.id} post={post} author={author} />
        ))}
    </Feed>
  );
};

export default UserPostList;
