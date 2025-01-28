import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice';
import dogReducer from './slices/dogSlice';
import { nationalApi } from '../services/nationality';
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        dog: dogReducer,
        [nationalApi.reducerPath]: nationalApi.reducer,

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nationalApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch