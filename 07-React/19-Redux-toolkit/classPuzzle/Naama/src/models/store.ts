import { configureStore } from '@reduxjs/toolkit'
import pokemonreducer from './pokemonSlicer'

export const store = configureStore({
  reducer: {
    pokemon:pokemonreducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch