import React from 'react';

import { SiPokemon } from 'react-icons/si';
import { Container } from './styled';

export default function Footer() {
  return (
    <Container>
      <div>
        <SiPokemon />
      </div>

      <p>
        All data used in this project was collected from PokéAPI.co <br />
        https://github.com/PokeAPI/pokeapi
      </p>
    </Container>
  );
}
