import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks.ts";
import { toggleLike } from "../../slices/postSlice.ts";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Header,
  Avatar,
  AuthorName,
  Title,
  Body,
  Actions,
  LikeButton,
  CommentButton,
} from "./PostCard.styled.tsx";

import { Props } from "../../types";

const PostCard = ({ post, author }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const liked = useAppSelector(
    (state) => state.posts.likedPostsIds[post.id] ?? false
  );

  const avatarSrc = `https://api.dicebear.com/7.x/thumbs/svg?seed=${author.username}`;

  return (
    <Card>
      <Header>
        <Avatar src={avatarSrc} alt="avatar" />
        <AuthorName>{author.name}</AuthorName>
      </Header>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
      <Actions>
        <LikeButton liked={liked} onClick={() => dispatch(toggleLike(post.id))}>
          {liked ? "❤️ Liked" : "🤍 Like"}
        </LikeButton>
        <CommentButton onClick={() => navigate(`/posts/${post.id}`)}>
          💬 View Comments
        </CommentButton>
      </Actions>
    </Card>
  );
};

export default PostCard;
