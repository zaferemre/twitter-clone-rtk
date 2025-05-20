import React from "react";
import { Photos } from "../../../types/types";
import { Grid, Thumbnail } from "./AlbumDisplay.styled.tsx";

interface AlbumDisplayProps {
  photos: Photos[];
}

const AlbumDisplay = ({ photos }: AlbumDisplayProps) => {
  const firstFour = photos.slice(0, 4);

  return (
    <Grid>
      {firstFour.map((photo) => (
        <Thumbnail
          key={photo.id}
          src={photo.thumbnailUrl}
          alt={photo.title}
          onError={(e) => {
            (
              e.target as HTMLImageElement
            ).src = `https://picsum.photos/200?random=${photo.id}`;
          }}
        />
      ))}
    </Grid>
  );
};

export default AlbumDisplay;
