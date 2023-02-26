import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useFetchPokemonInfo } from 'hooks';
import { pokemonInfoSelector } from 'store/selectors';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

const PokemonInfo: React.FC = () => {
  const { pokemonUrl, pokemonInfo, isLoading, error } =
    useAppSelector(pokemonInfoSelector);
  useFetchPokemonInfo(pokemonUrl);
  const navigate = useNavigate();

  return (
    pokemonInfo && (
      <Card
        sx={{
          width: '45rem',
          ml: '1rem',
          background: 'linear-gradient(145deg, #99cfe5, #4f839a)',
          boxShadow: '11px 11px 22px #678b9a, -11px -11px 22px #b7f7ff',
          borderRadius: '30px',
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#4b2db7' }} aria-label="recipe">
              <CatchingPokemonIcon />
            </Avatar>
          }
          title={pokemonInfo.name}
          titleTypographyProps={{
            fontFamily: 'Fantasy',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1f3e14',
          }}
          action={
            <IconButton
              aria-label="close pokemon info"
              color="inherit"
              onClick={() => {
                navigate('/');
              }}
            >
              <CloseIcon />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          height="250"
          image={pokemonInfo.sprites.back_default}
          alt="Paella dish"
          sx={{ objectFit: 'fill' }}
        />
        <Box display="flex" justifyContent={'space-around'}>
          <CardContent>
            <Typography variant="h5" color="#4a328f" fontSize="1.5rem">
              Abilities:
            </Typography>
            {pokemonInfo.abilities.map((item) => (
              <div>
                <Typography variant="body1" color="#ffffff" textAlign="center">
                  {item.ability.name}
                </Typography>
              </div>
            ))}
          </CardContent>
          <CardContent>
            <Typography variant="h5" color="#662d76">
              Types:
            </Typography>
            {pokemonInfo.types.map((item) => (
              <div>
                <Typography variant="body1" color="#ffffff" textAlign="center">
                  {item.type.name}
                </Typography>
              </div>
            ))}
          </CardContent>
        </Box>
        <CardContent>
          <Box display="flex" justifyContent="space-around">
            <Typography variant="h5" color="#25600e">
              Experience:
            </Typography>
            <Avatar sx={{ bgcolor: '#3b6a29' }}>
              {pokemonInfo.base_experience}
            </Avatar>
          </Box>
        </CardContent>
      </Card>
    )
  );
};

export default PokemonInfo;
