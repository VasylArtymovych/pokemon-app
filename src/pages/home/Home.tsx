import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useAppSelector, useFetchPokemons } from 'hooks';
import { usePagination } from 'hooks/pagination';
import { baseUrl } from 'services/pokemonApi';
import Pagination from 'components/Pagination';
import PokemonList from 'components/PokemonList';
import { pokemonsSelector } from 'store/selectors';
import { Container } from '@mui/system';
import Header from 'components/Header';
import { LinearProgress } from '@mui/material';

const Home: React.FC = () => {
  const { currentUrl, onPrevBtnClick, onNextBtnClick } = usePagination(baseUrl);
  useFetchPokemons(currentUrl);
  const { pokemons, isLoading, error } = useAppSelector(pokemonsSelector);

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: { md: '100vh' },
        background: '#c4b9e4',
        padding: '3.7rem 0 1rem',
      }}
    >
      <Header />
      {isLoading === 'pending' && <LinearProgress color="secondary" />}
      <Box sx={{ display: 'flex', pb: '1.5rem' }}>
        {pokemons && <PokemonList pokemons={pokemons.results} />}
        <Outlet />
      </Box>
      {pokemons && (
        <Pagination
          onPrevBtnClick={onPrevBtnClick}
          onNextBtnClick={onNextBtnClick}
        />
      )}
      {isLoading === 'failed' && <h2>{error}</h2>}
    </Container>
  );
};

export default Home;
