import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title } from './styled';

export default function Header() {
  return (
    <Container>
      <Title>
        <Link to="/">Pokedex</Link>
      </Title>
    </Container>
  );
}
