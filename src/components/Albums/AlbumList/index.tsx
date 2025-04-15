import React from "react";
import { useGetAlbumsQuery } from "../../../app/redux/services/photosApi.ts";
import { Loading, Feed, Error } from "./AlbumList.styled.tsx";
import { Albums } from "../../../types/types.ts";

export const AlbumsList = () => {
  const {
    data: albums,
    isLoading: albumsLoading,
    isError: albumsError,
  } = useGetAlbumsQuery();

  return (
    <Feed>
      {albumsLoading && <Loading>Loading albums...</Loading>}
      {albumsError && <Error>Failed to load albums.</Error>}
      {albums?.map((album: Albums) => (
        <div key={album.id}>
          <h2>{album.title}</h2>
          {/* Render other album details here */}
        </div>
      ))}
    </Feed>
  );
};
