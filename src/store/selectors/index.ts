import { RootState } from 'store/store';

export const pokemonInfoSelector = (state: RootState) => state.pokemonInfo;
export const pokemonsSelector = (state: RootState) => state.pokemons;
