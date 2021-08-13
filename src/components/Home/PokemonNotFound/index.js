import React from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { usePoke } from '../../../hooks/usePokemon';

import { Container, Title } from './styled';

export default function Loading() {
  const { isLoading, filterPokemons } = usePoke();
  return (
    <Container>
      {isLoading && <Title>Loading</Title>}
      {!isLoading && !filterPokemons.length && (
        <div>
          <Title>Pokemon Not Found</Title>
          <GiMagnifyingGlass size="10%" color="grey" />
        </div>
      )}
    </Container>
  );
}
