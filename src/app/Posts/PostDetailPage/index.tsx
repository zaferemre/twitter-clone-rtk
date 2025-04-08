import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../redux/services/postApi.ts";
import { useGetUsersQuery } from "../../redux/services/authApi.ts";
import { useGetCommentsByPostIdQuery } from "../../redux/services/commentsApi.ts";

import CommentList from "../../../components/posts/CommentList/index.tsx";
import DashboardLayout from "../../../components/Layout/DashboardLayout/index.tsx";
import PostCard from "../../../components/posts/PostCard/index.tsx";

import { PostDetailWrapper } from "./PostDetailPage.styled.tsx";

const PostDetailPage = () => {
  const { id } = useParams();
  const postId = Number(id);

  const { data: post, isLoading: postLoading } = useGetPostByIdQuery(postId);
  const { data: users } = useGetUsersQuery();
  const { data: comments, isLoading: commentsLoading } =
    useGetCommentsByPostIdQuery(postId);

  if (postLoading || commentsLoading)
    return <DashboardLayout>Loading...</DashboardLayout>;
  if (!post) return <DashboardLayout>Post not found</DashboardLayout>;

  const author = users?.find((u) => u.id === post.userId);
  return (
    <DashboardLayout>
      <PostDetailWrapper>
        {author && <PostCard post={post} author={author} />}
        {comments && <CommentList comments={comments} />}
      </PostDetailWrapper>
    </DashboardLayout>
  );
};

export default PostDetailPage;
