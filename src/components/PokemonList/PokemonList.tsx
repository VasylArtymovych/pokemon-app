import React from 'react';
import Box from '@mui/material/Box';
import { IPokemon } from 'types';
import ListItem from './LIstItem/ListItem';

interface PokemonListProps {
  pokemons: IPokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
      }}
    >
      {pokemons.map((pokemon) => (
        <ListItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </Box>
  );
};

export default PokemonList;
