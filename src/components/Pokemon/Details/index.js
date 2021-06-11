import React from 'react';

import { Container, Type, Abil, PokeDetails } from './styled';

export default function Details({ id, height, weight, abilities, type }) {
  return (
    <Container>
      <PokeDetails>
        <thead>
          <tr>
            <td>ID:</td>
            <td>#{id}</td>
          </tr>
          <tr>
            <td>Height:</td>
            <td>{height}</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Abilities:</td>
            {abilities.map((abl) => (
              <Abil
                key={abl.ability.name}
                name={type[0] ? type[0].type.name : '???'}
              >
                {abl.ability.name}
              </Abil>
            ))}
          </tr>
          <tr>
            <td>Type:</td>
            {type.map((data) => (
              <Type key={data.type.name} name={data.type.name}>
                {data.type.name}
              </Type>
            ))}
          </tr>
        </thead>
      </PokeDetails>
    </Container>
  );
}
