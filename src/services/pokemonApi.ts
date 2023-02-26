import axios from 'axios';
import { IPokemonsResponse, IPokemonInfoResponse } from 'types';

export const baseUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=12';

export const getPokemons = async (url: string): Promise<IPokemonsResponse> => {
  return axios.get(url).then(({ data }) => data);
};

export const getPokemonInfo = async (
  url: string
): Promise<IPokemonInfoResponse> => {
  return axios.get(url).then(({ data }) => data);
};
