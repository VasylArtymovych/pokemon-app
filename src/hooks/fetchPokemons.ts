import { useEffect } from 'react';
import { fetchPokemons } from 'store/operations';
import { useAppDispatch } from './redux';

export const useFetchPokemons = (url: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemons(url));
  }, [dispatch, url]);
};
