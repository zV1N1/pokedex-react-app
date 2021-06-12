import React from 'react';
import PropTypes from 'prop-types';
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

CardHeader.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
};
