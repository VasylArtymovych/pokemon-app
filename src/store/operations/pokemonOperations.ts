import { createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonApi } from 'services';

export const fetchPokemons = createAsyncThunk(
  'pokemons/getAll',
  async (url: string, thunkApi) => {
    try {
      const response = await pokemonApi.getPokemons(url);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchPokemonInfo = createAsyncThunk(
  'pokemonInfo/getInfo',
  async (url: string, thunkApi) => {
    try {
      const response = await pokemonApi.getPokemonInfo(url);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
