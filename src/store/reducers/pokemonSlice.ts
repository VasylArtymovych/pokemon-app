import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemons } from '../operations';
import { IPokemonsState } from 'types';

const initialState: IPokemonsState = {
  pokemons: null,
  isLoading: 'idle',
  error: '',
};

const tracksSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get pokemons:
    builder.addCase(fetchPokemons.pending, (state, action) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
      state.isLoading = 'succeeded';
    });
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = 'Bed request';
      }
      state.isLoading = 'failed';
    });
  },
});

export default tracksSlice.reducer;
