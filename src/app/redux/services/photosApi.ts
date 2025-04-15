import { api } from "../../../app/redux/api.ts";
import { Photos, User } from "../../../types/types.ts";

export const photosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPhotos: build.query<Photos[], void>({
      query: () => "photos",
    }),
    getAlbums: build.query<User[], void>({
      query: () => "users",
    }),
  }),
});
export const { useGetPhotosQuery, useGetAlbumsQuery } = photosApi;
