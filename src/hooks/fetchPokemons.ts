import { useEffect } from 'react';
import { fetchPokemons, fetchPokemonInfo } from 'store/operations';
import { useAppDispatch } from './redux';

export const useFetchPokemons = (url: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemons(url));
  }, [dispatch, url]);
};

export const useFetchPokemonInfo = (url: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemonInfo(url));
  }, [dispatch, url]);
};
