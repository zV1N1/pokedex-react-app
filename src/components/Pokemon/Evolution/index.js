import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { HiOutlineArrowRight } from 'react-icons/hi';

import {
  Container,
  Title,
  Chain,
  Pokemon,
  Species,
  Level,
  Name,
} from './styled';

import axios from '../../../services/axios';

export default function Evolution({ type, url }) {
  const [evolution, setEvolution] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(url);
      const evolChain = [];
      let evoData = data.chain;
      do {
        const evoDetails = evoData.evolution_details[0];

        const pkx = evoData.species.url.split('/')[6];

        evolChain.push({
          species_name: evoData.species.name,
          min_level: !evoDetails ? 1 : evoDetails.min_level,
          item: !evoDetails ? null : evoDetails.item,
          id: pkx,
          evolution: !!evoData.evolution_details.length,
        });

        evoData = evoData.evolves_to[0];
      } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
      setEvolution(evolChain);
    }
    getData();
  }, []);
  return (
    <Container>
      {type[0] && <Title name={type[0].type.name}>EVOLUTION CHAIN</Title>}
      <Chain>
        {evolution.map((data) => (
          <Pokemon key={data.id}>
            {data.evolution && (
              <Level>
                <p>Level {data.min_level}+</p>
                <HiOutlineArrowRight />
              </Level>
            )}
            <Species to={`/pokemon/${data.id}`}>
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`}
                alt={data.species_name}
              />
              <p>#{data.id}</p>
              {type[0] && (
                <Name name={type[0].type.name}>{data.species_name}</Name>
              )}
            </Species>
          </Pokemon>
        ))}
      </Chain>
    </Container>
  );
}

Evolution.propTypes = {
  type: PropTypes.arrayOf(PropTypes.object).isRequired,
  url: PropTypes.string.isRequired,
};
