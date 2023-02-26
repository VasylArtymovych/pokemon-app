import { useState } from 'react';
import { useAppSelector } from './redux';
import { pokemonsSelector } from 'store/selectors';

export const usePagination = (url: string) => {
  const [currentUrl, setCurrentUrl] = useState(url);
  const { pokemons } = useAppSelector(pokemonsSelector);

  const onNextBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (pokemons && pokemons.next) {
      setCurrentUrl(pokemons.next);
    }
  };
  const onPrevBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (pokemons && pokemons.previous) {
      setCurrentUrl(pokemons.previous);
    }
  };

  return { currentUrl, onNextBtnClick, onPrevBtnClick };
};
