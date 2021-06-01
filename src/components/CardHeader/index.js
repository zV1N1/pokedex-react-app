import React from 'react';
import { Container, Name, Types, Heading } from './styled';

export default function CardHeader({ id, name, types }) {
  return (
    <Heading>
      <Container>
        <h2>#{id}</h2>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt="pokemon"
        />
        <Types>
          <li>{types[0].type.name}</li>
          {types[1] && <li>{types[1].type.name}</li>}
        </Types>
      </Container>

      <Name>{name}</Name>
    </Heading>
  );
}
