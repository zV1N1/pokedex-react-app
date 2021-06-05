import React from 'react';
import { Link } from 'react-router-dom';
import { SiPokemon } from 'react-icons/si';
import { Container, Button } from './styled';

export default function Page404() {
  return (
    <Container>
      <h1>404!</h1>
      <h2>Oops! Page Not Found!</h2>
      <SiPokemon size="40%" />
      <Link to="/">
        <Button>Go back</Button>
      </Link>
    </Container>
  );
}
