import { api } from "../../../app/redux/api.ts";
import { UserDetails } from "../../../types/types";

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserDetails: build.query<UserDetails, number>({
      query: (id) => `users/${id}`,
    }),
  }),
});
export const { useGetUserDetailsQuery } = profileApi;
