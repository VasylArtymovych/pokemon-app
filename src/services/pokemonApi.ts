import axios from 'axios';
import { IPokemonsResponse, IPokemonInfoResponse } from 'types';

// export const host = 'https://pokeapi.co/api/v2';

// axios.defaults.baseURL = host;

export const getPokemons = async (url: string): Promise<IPokemonsResponse> => {
  return axios.get(url).then(({ data }) => data);
};

export const getPokemonInfo = async (
  url: string
): Promise<IPokemonInfoResponse> => {
  return axios.get(url).then(({ data }) => data);
};
