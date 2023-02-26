import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemonInfo } from '../operations';
import { IPokemonInfoState } from 'types';

const initialState: IPokemonInfoState = {
  pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/1',
  pokemonInfo: null,
  isLoading: 'idle',
  error: '',
};

const pokemonInfoSlice = createSlice({
  name: 'pokemonsInfo',
  initialState,
  reducers: {
    setPokemonUrl(state, action) {
      state.pokemonUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    // get pokemon information:
    builder.addCase(fetchPokemonInfo.pending, (state, action) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchPokemonInfo.fulfilled, (state, action) => {
      state.pokemonInfo = action.payload;
      state.isLoading = 'succeeded';
    });
    builder.addCase(fetchPokemonInfo.rejected, (state, action) => {
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = 'Bed request';
      }
      state.isLoading = 'failed';
    });
  },
});

export const { setPokemonUrl } = pokemonInfoSlice.actions;
export default pokemonInfoSlice.reducer;
