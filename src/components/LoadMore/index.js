import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { More } from './styled';

import axios from '../../services/axios';
import * as actions from '../../store/modules/pokemons/actions';

export default function LoadMore() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.ReducerPokemon.pokemons);

  function handleClick() {
    const qtyPokemons = pokemons.length + 1;
    const newPokemons = () =>
      Array(3)
        .fill()
        .map((_, index) => axios.get(`/${qtyPokemons + index}`));

    const pokemonPromises = newPokemons();
    const newData = [...pokemons];

    Promise.all(pokemonPromises)
      .then((data) => {
        data.map((value) => {
          newData.push(value.data);
          return null;
        });
      })
      .then(() => dispatch(actions.saveData({ newData })));
  }

  return (
    <More type="button" onClick={handleClick}>
      +
    </More>
  );
}
