import { api } from "../../../app/api.ts";
import { User } from "../types";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = authApi;
