import { combineReducers } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';
import pokemonInfoReducer from './pokemonInfoSlice';

export const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  pokemonInfo: pokemonInfoReducer,
});

export * from './pokemonInfoSlice';
