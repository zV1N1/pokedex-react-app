import React from 'react';
import { Container, Title, Filters, Search } from './styled';

export default function Header({ qty }) {
  return (
    <Container>
      <Title>Pokedex ({qty}/497)</Title>
      <Filters />
      <Search placeholder="ex: pikachu" />
    </Container>
  );
}
