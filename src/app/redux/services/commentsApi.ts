import { api } from "../../../app/redux/api.ts";
import { Comments } from "../../../types/types.ts";

export const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query<Comments[], number>({
      query: (postId) => `comments?postId=${postId}`,
    }),
  }),
});

export const { useGetCommentsByPostIdQuery } = commentsApi;
