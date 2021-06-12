import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CgPokemon } from 'react-icons/cg';

import CardDetails from '../CardDetails';
import CardHeader from '../CardHeader';
import { Card } from './styled';

export default function CardPokemon({ data }) {
  return (
    <Card>
      <CardHeader id={data.id} name={data.name} types={data.types} />
      <CardDetails
        attack={data.stats[1].base_stat}
        defense={data.stats[2].base_stat}
        speed={data.stats[5].base_stat}
        hp={data.stats[0].base_stat}
      />
      <Link to={`/pokemon/${data.id}`}>
        <button type="button">
          More information
          <div>
            <CgPokemon size="80%" />
          </div>
        </button>
      </Link>
    </Card>
  );
}

CardPokemon.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.object),
    stats: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
