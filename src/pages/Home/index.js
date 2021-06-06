import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Pokedex, Container } from './styled';
import CardPokemon from '../../components/CardPokemon';
import Header from '../../components/Header';
import LoadMore from '../../components/LoadMore';
import PokemonNotFound from '../../components/PokemonNotFound';

import axios from '../../services/axios';
import * as actions from '../../store/modules/pokemons/actions';

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.ReducerPokemon.pokemons);
  const [filterPokemons, setFilterPokemons] = useState([]);
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    function getData() {
      const newPokemons = () =>
        Array(3)
          .fill()
          .map((_, index) => axios.get(`/${index + 1}`));

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

    if (pokemons < 3) getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (query.get('type')) {
      setFilterPokemons(
        pokemons.filter((pk) => pk.types[0].type.name === query.get('type')),
      );
    } else {
      setFilterPokemons(pokemons);
    }
    // eslint-disable-next-line
  }, [pokemons, query.get('type')]);

  return (
    <Container>
      <Header qty={pokemons.length} setFilter={setFilterPokemons} />
      {filterPokemons.length ? (
        <Pokedex>
          {filterPokemons.map((data) => (
            <CardPokemon key={data.name} data={data} />
          ))}
          <LoadMore />
        </Pokedex>
      ) : (
        <PokemonNotFound />
      )}
    </Container>
  );
}
