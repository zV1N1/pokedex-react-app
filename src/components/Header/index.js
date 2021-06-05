import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Heading, Title, Filters, Type } from './styled';

import SearchPokemon from '../SearchPokemon';

export default function Header({ qty, setData }) {
  const [active, setActive] = useState('');
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    setActive(query.get('type'));
    // eslint-disable-next-line
  }, [query.get('type')]);

  return (
    <Heading>
      <Title>
        <Link to="/">Pokedex ({qty}/497)</Link>
      </Title>
      <Container>
        <Filters>
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
              normal
            </Type>
          </li>
          <li>
            <Type name="bug" exact to="?type=bug" active={active}>
              bug
            </Type>
          </li>
        </Filters>
        <SearchPokemon setData={setData} />
      </Container>
    </Heading>
  );
}
