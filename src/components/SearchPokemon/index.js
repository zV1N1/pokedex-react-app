import React from 'react';
import { CgPokemon } from 'react-icons/cg';
import { Container, Search } from './styled';

export default function SearchPokemon() {
  return (
    <Container>
      <Search>
        <CgPokemon size="30px" />
        <input type="text" placeholder="ex: pikachu" />
      </Search>
    </Container>
  );
}
