import React from "react";
import { useGetPostsQuery } from "../../services/postApi.ts";
import { useGetUsersQuery } from "../../../auth/services/authApi.ts";
import PostCard from "../PostCard/index.tsx";
import styled from "styled-components";
import { Post } from "../../types";
import { User } from "../../../auth/types";
import { Loading, Feed, Error } from "./PostList.styled.tsx";

const PostList = () => {
  const {
    data: posts,
    isLoading: postsLoading,
    isError: postsError,
  } = useGetPostsQuery();

  const {
    data: users,
    isLoading: usersLoading,
    isError: usersError,
  } = useGetUsersQuery();

  if (postsLoading || usersLoading) return <Loading>Loading feed...</Loading>;
  if (postsError || usersError)
    return <Error>Failed to load posts or users.</Error>;

  return (
    <Feed>
      {posts?.map((post: Post) => {
        const author: User | undefined = users?.find(
          (u) => u.id === post.userId
        );
        if (!author) return null;

        return <PostCard key={post.id} post={post} author={author} />;
      })}
    </Feed>
  );
};

export default PostList;
