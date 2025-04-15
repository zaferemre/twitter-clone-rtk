import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks.ts";
import { useNavigate } from "react-router-dom";
import { toggleLike } from "../../../app/redux/slices/postSlice.ts";
import { AlbumProps } from "../../../types/types.ts";
import {
  Card,
  Header,
  Avatar,
  AuthorName,
  Title,
  Body,
  Actions,
  LikeButton,
  AlbumButton,
} from "./AlbumCard.styled.tsx";

const AlbumCard = ({ album, author, photos }: AlbumProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const liked = useAppSelector(
    (state) => state.posts.likedPostsIds[album.id] ?? false
  );
  const avatarSrc = `https://api.dicebear.com/7.x/thumbs/svg?seed=${author.username}`;

  return (
    <Card>
      <Header>
        <Avatar src={avatarSrc} alt="avatar" />
        <AuthorName>{author.name}</AuthorName>
      </Header>
      <Title>{album.title}</Title>
      <Body>{photos.length} photos</Body>
      <Actions>
        <LikeButton
          liked={liked}
          onClick={() => dispatch(toggleLike(album.id))}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </LikeButton>
        <AlbumButton onClick={() => navigate(`/albums/${album.id}`)}>
          💬 View Photos
        </AlbumButton>
      </Actions>
    </Card>
  );
};

export default AlbumCard;
