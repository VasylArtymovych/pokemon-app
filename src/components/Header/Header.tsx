import React from 'react';
import { AppBar, Avatar, Typography } from '@mui/material';
import pokemonLogo from 'images/pokemon-great-ball.png';

const Header = () => {
  return (
    <AppBar
      sx={{
        background: 'linear-gradient(145deg, #99cfe5, #4f839a)',
        paddingLeft: '1rem',
        flexDirection: 'row',
      }}
    >
      <Avatar sx={{ bgcolor: 'transparent', mr: '2rem' }} aria-label="logo">
        <img src={pokemonLogo} alt="pokemon-ball" />
      </Avatar>
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'fantasy',
          fontSize: '2rem',
          fontWeight: 'bold',
          textShadow: 'rgba(37,15,209,0.35) -16px 10px 7px',
        }}
      >
        Pokemons
      </Typography>
    </AppBar>
  );
};

export default Header;
