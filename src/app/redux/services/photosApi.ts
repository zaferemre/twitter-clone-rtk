import { api } from "../../../app/redux/api.ts";
import { Photos, Albums } from "../../../types/types.ts"; // Use your defined types

export const photosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPhotos: build.query<Photos[], void>({
      query: () => "photos",
    }),
    getAlbums: build.query<Albums[], void>({
      query: () => "albums",
    }),
  }),
});

export const { useGetPhotosQuery, useGetAlbumsQuery } = photosApi;
