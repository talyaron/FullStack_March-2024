import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Nationality } from "../model/models/nationalityModel";

// Define a service using a base URL and expected endpoints
export const nationalApi = createApi({
    reducerPath: 'nationalApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.nationalize.io/' }),
    endpoints: (builder) => ({
        getNationalityByName: builder.query<Nationality, string>({
            query: (name) => `?name=${name}`, // Correct query string format
            
        }),
    }),
});

export const { useGetNationalityByNameQuery } = nationalApi; 
