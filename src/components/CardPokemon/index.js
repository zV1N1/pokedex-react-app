import React from 'react';
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
        speed={data.stats[1].base_stat}
        hp={data.stats[5].base_stat}
      />
    </Card>
  );
}
