// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../slices/Apislice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // Add the API reducer to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Add the API middleware
});
