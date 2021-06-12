import React from 'react';
import PropTypes from 'prop-types';
import { More } from './styled';

import axios from '../../../services/axios';

export default function LoadMore({ pokemons, setPokemon }) {
  function handleClick() {
    const qtyPokemons = pokemons.length + 1;
    const newPokemons = () =>
      Array(10)
        .fill()
        .map((_, index) => axios.get(`pokemon/${qtyPokemons + index}`));

    const pokemonPromises = newPokemons();
    const newData = [...pokemons];

    Promise.all(pokemonPromises)
      .then((data) => {
        data.map((value) => {
          newData.push(value.data);
          return null;
        });
      })
      .then(() => setPokemon(newData));
  }

  return (
    <More type="button" onClick={handleClick}>
      +
    </More>
  );
}

LoadMore.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPokemon: PropTypes.func.isRequired,
};
