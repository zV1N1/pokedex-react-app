import React, { useEffect, useState } from 'react';
import { More } from './styled';

import axios from '../../../services/axios';
import { usePoke } from '../../../hooks/usePokemon';

export default function LoadMore() {
  const { pokemons, setPokemons } = usePoke();
  const [disable, setDisable] = useState(false);

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
      .then(() => setPokemons(newData))
      .then(setDisable(true));
  }

  useEffect(() => {
    setDisable(false);
  }, [pokemons]);

  return (
    <More disabled={disable} type="button" onClick={handleClick}>
      +
    </More>
  );
}
