export interface IPokemonsResponse {
  count: number;
  next: string;
  previous: null | string;
  results: { name: string; url: string }[];
}
export interface IPokemonInfoResponse {
  count: number;
  next: string;
  previous: null | string;
  results: { name: string; url: string }[];
}

export type LoadingType = 'idle' | 'pending' | 'succeeded' | 'failed';
export interface IPokemonsState {
  pokemons: null | IPokemonsResponse;
  pokemonInfo: null | any;
  isLoading: LoadingType;
  error: string;
}
