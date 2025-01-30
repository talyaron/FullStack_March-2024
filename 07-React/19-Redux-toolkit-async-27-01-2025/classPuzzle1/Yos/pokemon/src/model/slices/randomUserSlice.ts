import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RandomUserState {
  userName: string;
  loading: boolean;
  error: string | null;
}

const initialState: RandomUserState = {
  userName: "random",
  loading: false,
  error: null,
};

const randomUserSlice = createSlice({
  name: "randomUser",
  initialState,
  reducers: {
    setRandomUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    fetchRandomUserStart(state) {
        state.loading = true;
        state.error = null;
    },
    fetchRandomUserSuccess(state, action: PayloadAction<string>) {
        state.loading = false;
        state.userName = action.payload;
    },
    fetchRandomUserFailure(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
    },
  },
});

export const { setRandomUserName } = randomUserSlice.actions;
export const selectRandomUser = (state: { randomUser: RandomUserState }) => state.randomUser.userName;
export default randomUserSlice.reducer;
