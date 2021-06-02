import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Pokedex, Container } from './styled';
import CardPokemon from '../../components/CardPokemon';
import Header from '../../components/Header';
import LoadMore from '../../components/LoadMore';
import PokemonNotFound from '../../components/PokemonNotFound';

import axios from '../../services/axios';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [filterPokemons, setfilterPokemons] = useState([]);
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
        .then(() => setPokemons(newData));
    }

    if (pokemons < 3) getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (query.get('type')) {
      setfilterPokemons(
        pokemons.filter((pk) => pk.types[0].type.name === query.get('type')),
      );
    } else {
      setfilterPokemons(pokemons);
    }

    // eslint-disable-next-line
  }, [pokemons, query.get('type')]);

  return (
    <Container>
      <Header qty={pokemons.length} />
      {filterPokemons.length ? (
        <Pokedex>
          {filterPokemons.map((data) => (
            <CardPokemon key={data.name} data={data} />
          ))}

          <LoadMore datas={pokemons} state={setPokemons} />
        </Pokedex>
      ) : (
        <PokemonNotFound />
      )}
    </Container>
  );
}
