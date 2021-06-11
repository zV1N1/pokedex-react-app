import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, FiltersType, Type } from './styled';

import SearchPokemon from '../SearchPokemon';

export default function Filters({ setFilter }) {
  const [active, setActive] = useState('');
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    setActive(query.get('type'));
  }, [query.get('type')]);
  return (
    <Container>
      <FiltersType>
        <li>
          <Type name="grass" exact to="?type=grass" active={active}>
            grass
          </Type>
        </li>
        <li>
          <Type name="fire" exact to="?type=fire" active={active}>
            fire
          </Type>
        </li>
        <li>
          <Type name="water" exact to="?type=water" active={active}>
            water
          </Type>
        </li>
        <li>
          <Type name="normal" exact to="?type=normal" active={active}>
            <p>normal</p>
          </Type>
        </li>
        <li>
          <Type name="bug" exact to="?type=bug" active={active}>
            bug
          </Type>
        </li>
      </FiltersType>
      <SearchPokemon setFilter={setFilter} />
    </Container>
  );
}
