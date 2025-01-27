import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice';
import dogReducer from './slices/dogSlice';
import { pokemonApi } from '../services/pokemon';
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        dog: dogReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch