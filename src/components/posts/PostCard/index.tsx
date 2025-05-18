import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks.ts";
import { toggleLike } from "../../../app/redux/slices/postSlice.ts";
import { useNavigate, Link } from "react-router-dom";
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
import { Props } from "../../../types/types.ts";

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
        <Link
          to={`/profile/${author.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <AuthorName>{author.name}</AuthorName>
        </Link>
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
