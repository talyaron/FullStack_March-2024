import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface pokemonState {
  pokemon: {
    img: string;
    name: string;
    type: string;
  } | null;
}

const initialState: pokemonState = {
  pokemon: null,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<{ img: string, name: string, type:string }|null>) => {
        state.pokemon = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPokemon } = pokemonSlice.actions;
export const selectPokemon = (state: { pokemon: pokemonState }) => state.pokemon.pokemon;
export default pokemonSlice.reducer;
