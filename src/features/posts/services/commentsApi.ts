import { api } from "../../../app/api.ts";
import { Comments } from "../types";

export const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query<Comments[], number>({
      query: (postId) => `comments?postId=${postId}`,
    }),
  }),
});

export const { useGetCommentsByPostIdQuery } = commentsApi;
