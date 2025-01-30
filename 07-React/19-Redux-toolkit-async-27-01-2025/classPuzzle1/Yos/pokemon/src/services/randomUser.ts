// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RandomUser } from "../model/randomUser/randomUserModel";

// Define a service using a base URL and expected endpoints
export const randomUserApi = createApi({
  reducerPath: "randomuser",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api/" }),
  endpoints: (builder) => ({
    getRandomUserName: builder.query<RandomUser, string>({
      query: () => ``,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetRandomUserNameQuery } = randomUserApi;
