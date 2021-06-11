import React, { useEffect, useState } from 'react';
import axios from '../../../services/axios';

import { Container, Title, Chain, Pokemon } from './styled';

export default function Evolution({ url }) {
  const [evolution, setEvolution] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(url);
      const evolChain = [];
      let evoData = data.chain;
      do {
        const evoDetails = evoData.evolution_details[0];

        const id = evoData.species.url.split('/')[6];

        evolChain.push({
          species_name: evoData.species.name,
          min_level: !evoDetails ? 1 : evoDetails.min_level,
          id,
        });
        evoData = evoData.evolves_to[0];
      } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
      setEvolution(evolChain);
    }
    getData();
  }, []);
  return (
    <Container>
      <Title>EVOLUTION CHAIN</Title>
      <Chain>
        {evolution.map((data) => (
          <Pokemon>
            <img
              src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`}
              alt={data.species_name}
            />
            <p key={data.name}>{data.species_name}</p>
          </Pokemon>
        ))}
      </Chain>
    </Container>
  );
}
