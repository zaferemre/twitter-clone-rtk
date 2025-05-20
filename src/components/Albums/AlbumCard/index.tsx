import React from "react";

import { AlbumProps } from "../../../types/types.ts";
import AlbumDisplay from "../AlbumDisplay/index.tsx";

import {
  Card,
  Header,
  Avatar,
  AuthorName,
  Title,
} from "./AlbumCard.styled.tsx";

const AlbumCard = ({ album, author, photos }: AlbumProps) => {
  const avatarSrc = `https://api.dicebear.com/7.x/thumbs/svg?seed=${author.username}`;

  return (
    <Card>
      <Header>
        <Avatar src={avatarSrc} alt="avatar" />
        <AuthorName>{author.name}</AuthorName>
      </Header>
      <Title>{album.title}</Title>
      {photos.length > 0 && (
        <div>
          <AlbumDisplay photos={photos} />
        </div>
      )}
    </Card>
  );
};

export default AlbumCard;
