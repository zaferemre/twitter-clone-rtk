import React from "react";
import { useGetPostsQuery } from "../../../app/redux/services/postApi.ts";
import { useGetUsersQuery } from "../../../app/redux/services/authApi.ts";
import PostCard from "../PostCard/index.tsx";
import { Post, User } from "../../../types/types.ts";

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
