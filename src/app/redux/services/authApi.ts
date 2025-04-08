import { api } from "../api.ts";
import { User } from "../../../types/types.ts";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = authApi;
