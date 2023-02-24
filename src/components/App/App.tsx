import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/home';
import PokemonInfo from 'pages/pokemonInfo';
import NotFound from 'pages/NotFound';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="info" element={<PokemonInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
