import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../model/models/productModel';



// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/products' }),
    tagTypes: ['products'],
    endpoints: (builder) => ({
        getAllProducts: builder.query<{products:Product[]},void>({
            query: () => `get-all-products`,
        }),
        addProduct:builder.mutation<Product, Partial<Product>>({
            query: (body) => ({
                url: `add-product`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['products']
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useAddProductMutation } = productsApi