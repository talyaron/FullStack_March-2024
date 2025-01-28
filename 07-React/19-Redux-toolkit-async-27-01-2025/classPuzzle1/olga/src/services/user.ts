import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../model/models/userModel';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/' }),
    endpoints: (builder) => ({
      getUsers: builder.query<{ results: User[] }, number | void>({
        query: (results = 10) => `?results=${results}`,
      }),
    }),
  });

  export const { useGetUsersQuery } = userApi;
