import React from "react";
import {
  useGetAlbumsQuery,
  useGetPhotosQuery,
} from "../../../app/redux/services/photosApi.ts";
import { useGetUsersQuery } from "../../../app/redux/services/authApi.ts";
import { useAppSelector } from "../../../app/redux/hooks.ts";
import AlbumCard from "../AlbumCard/index.tsx";
import { Albums, User, Photos } from "../../../types/types.ts";
import { Loading, Feed, Error } from "./AlbumList.styled.tsx";

const AlbumList = () => {
  const currentUser = useAppSelector((state) => state.auth.user);

  const {
    data: albums,
    isLoading: albumsLoading,
    isError: albumsError,
  } = useGetAlbumsQuery();

  const {
    data: users,
    isLoading: usersLoading,
    isError: usersError,
  } = useGetUsersQuery();

  const {
    data: photos,
    isLoading: photosLoading,
    isError: photosError,
  } = useGetPhotosQuery();

  if (albumsLoading || usersLoading || photosLoading)
    return <Loading>Loading albums...</Loading>;

  if (albumsError || usersError || photosError)
    return <Error>Failed to load albums, users, or photos.</Error>;

  const userAlbums =
    albums?.filter((album) => album.userId === currentUser?.id) ?? [];

  return (
    <Feed>
      {userAlbums.map((album: Albums) => {
        const author: User | undefined = users?.find(
          (user) => user.id === album.userId
        );

        const albumPhotos: Photos[] =
          photos?.filter((photo) => photo.albumId === album.id) ?? [];

        if (!author) return null;

        return (
          <AlbumCard
            key={album.id}
            album={album}
            author={author}
            photos={albumPhotos}
          />
        );
      })}
    </Feed>
  );
};

export default AlbumList;
