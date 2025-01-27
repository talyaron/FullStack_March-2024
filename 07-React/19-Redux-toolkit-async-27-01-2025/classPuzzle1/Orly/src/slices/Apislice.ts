// src/services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/' }), // Base URL for Random User API
  endpoints: (builder) => ({
    getRandomUser: builder.query({
      query: () => '', // The API doesn’t require additional paths for random user data
    }),
  }),
});

export const { useGetRandomUserQuery } = api;
