import React from 'react';
import { IPokemon } from 'types';
import { ItemContainer } from './ListItem.styled';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { setPokemonUrl } from 'store/reducers';
import { Avatar, Typography } from '@mui/material';
import pokemonLogo from 'images/pokemon-great-ball.png';

interface ListItemProps {
  pokemon: IPokemon;
}

const ListItem: React.FC<ListItemProps> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onItemClickhandler = () => {
    dispatch(setPokemonUrl(pokemon.url));
    navigate('/info');
  };

  return (
    <ItemContainer onClick={onItemClickhandler}>
      <Typography
        variant="h2"
        sx={{
          fontSize: {
            lg: 30,
            md: 20,
            sm: 15,
            xs: 10,
          },
          fontFamily: 'fantasy',
          fontWeight: 'bold',
          textShadow: 'rgba(37,15,209,0.35) -16px 10px 7px',
        }}
      >
        {pokemon.name}
      </Typography>

      <Avatar sx={{ bgcolor: 'transparent' }} aria-label="logo">
        <img src={pokemonLogo} alt="pokemon-ball" />
      </Avatar>
    </ItemContainer>
  );
};

export default ListItem;
