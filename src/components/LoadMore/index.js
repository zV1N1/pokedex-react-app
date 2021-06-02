import React from 'react';
import { More } from './styled';

import axios from '../../services/axios';

export default function LoadMore({ datas, state }) {
  function handleClick() {
    const qtyPokemons = datas.length + 1;
    const newPokemons = () =>
      Array(3)
        .fill()
        .map((_, index) => axios.get(`/${qtyPokemons + index}`));

    const pokemonPromises = newPokemons();
    const newData = [...datas];

    Promise.all(pokemonPromises)
      .then((data) => {
        data.map((value) => {
          newData.push(value.data);
          return null;
        });
      })
      .then(() => state(newData));
  }

  return (
    <More type="button" onClick={handleClick}>
      +
    </More>
  );
}
