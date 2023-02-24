import { useAppSelector, useFetchPokemons } from 'hooks';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home: React.FC = () => {
  const [url, setUrl] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=12'
  );
  useFetchPokemons(url);
  const { pokemons } = useAppSelector((state) => state);

  const onNextBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (pokemons) {
      setUrl(pokemons.next);
    }
  };
  const onPrevBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (pokemons && pokemons.previous) {
      setUrl(pokemons.previous);
    }
  };

  return (
    <div>
      <button type="button" onClick={onNextBtnClick}>
        next
      </button>
      <button onClick={onPrevBtnClick}>prev</button>
      <Link to={'/info'}>To info</Link>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
};

export default Home;
