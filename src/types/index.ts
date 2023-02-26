export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonsResponse {
  count: number;
  next: string;
  previous: null | string;
  results: IPokemon[];
}

export interface IPokemonInfoResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: { ability: { name: string; url: string } }[];
  forms: any;
  game_indises: any;
  held_items: any;
  location_area_encounters: string;
  moves: any;
  species: any;
  sprites: any;
  stats: any;
  types: { type: { name: string; url: string } }[];
  past_types: any;
}

export type LoadingType = 'idle' | 'pending' | 'succeeded' | 'failed';

export interface IPokemonsState {
  pokemons: null | IPokemonsResponse;
  isLoading: LoadingType;
  error: string;
}

export interface IPokemonInfoState {
  pokemonUrl: string;
  pokemonInfo: null | IPokemonInfoResponse;
  isLoading: LoadingType;
  error: string;
}
