import React from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { Container, Title } from './styled';

export default function PokemonNotFound() {
  return (
    <Container>
      <Title>Pokemons Not Found</Title>
      <GiMagnifyingGlass size="10%" color="grey" />
    </Container>
  );
}
