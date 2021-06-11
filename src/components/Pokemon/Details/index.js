import React, { useEffect, useState } from 'react';
import axios from '../../../services/axios';

import { Container, Type, Abil, PokeDetails } from './styled';

export default function Details({ id }) {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [abilities, setAbilities] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`pokemon/${id}`);

        setHeight(data.height);
        setWeight(data.weight);
        setAbilities(data.abilities);
        setType(data.types);
      } catch (e) {
        console.log(e);
      }
    }

    getData();
    // eslint-disable-next-line
  }, []);

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
