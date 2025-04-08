import { api } from "../../../app/redux/api.ts";
import { Post, User } from "../../../types/types.ts";

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => "posts",
    }),
    getPostById: build.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
    getUsers: build.query<User[], void>({
      query: () => "users",
    }),
  }),
});
export const { useGetPostsQuery, useGetPostByIdQuery, useLazyGetUsersQuery } =
  postApi;
