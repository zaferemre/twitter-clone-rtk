import React from "react";
import { useGetPostsQuery } from "../../../app/redux/services/postApi.ts";
import { useGetUsersQuery } from "../../../app/redux/services/authApi.ts";
import PostCard from "../PostCard/index.tsx";

import { Post, User } from "../../../types/types.ts";

import { Feed } from "./LikedList.styled.tsx";
import { useAppSelector } from "../../../app/redux/hooks.ts";

const LikedList = () => {
  const { data: posts } = useGetPostsQuery();

  const { data: users } = useGetUsersQuery();
  const likedPostIds = useAppSelector((state) => state.posts.likedPostsIds);
  const likedPosts = posts?.filter((post) => likedPostIds[post.id]) ?? [];

  return (
    <Feed>
      {likedPosts.map((post: Post) => {
        const author: User | undefined = users?.find(
          (u) => u.id === post.userId
        );
        if (!author) return null;

        return <PostCard key={post.id} post={post} author={author} />;
      })}
    </Feed>
  );
};

export default LikedList;
