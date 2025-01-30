import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { randomUserApi } from "../../services/randomUser";
import randomUserReducer from "../slices/randomUserSlice";
import counterReducer from "../slices/counterSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [randomUserApi.reducerPath]: randomUserApi.reducer,
    randomUser: randomUserReducer,
    counter: counterReducer ,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(randomUserApi.middleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
