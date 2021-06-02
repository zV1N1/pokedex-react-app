import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Heading, Title, Filters } from './styled';

import SearchPokemon from '../SearchPokemon';

export default function Header({ qty }) {
  function handleClick() {}

  return (
    <Heading>
      <Title>Pokedex ({qty}/497)</Title>
      <Container>
        <Filters>
          <li>
            <NavLink
              exact
              onClick={handleClick}
              to="?type=grass"
              activeClassName="selected"
            >
              grass
            </NavLink>
          </li>
          <li>
            <NavLink exact to="?type=fire" activeClassName="selected">
              fire
            </NavLink>
          </li>
          <li>
            <NavLink to="?type=water">water</NavLink>
          </li>
          <li>
            <NavLink to="?type=normal">normal</NavLink>
          </li>
          <li>
            <NavLink to="?type=fly">fly</NavLink>
          </li>
        </Filters>
        <SearchPokemon />
      </Container>
    </Heading>
  );
}
