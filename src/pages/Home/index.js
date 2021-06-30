import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Pokedex, Container } from './styled';
import CardPokemon from '../../components/Home/CardPokemon';
import LoadMore from '../../components/Home/LoadMore';
import PokemonNotFound from '../../components/Home/PokemonNotFound';
import Filters from '../../components/Home/Filters';

import axios from '../../services/axios';

export default function Home() {
  const [filterPokemons, setFilterPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const query = new URLSearchParams(useLocation().search);

  function filter(p) {
    return p.types[0].type.name === query.get('type');
  }

  useEffect(() => {
    function getData() {
      const newPokemons = () =>
        Array(10)
          .fill()
          .map((_, index) => axios.get(`pokemon/${index + 1}`));

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
  }, []);

  useEffect(() => {
    if (query.get('type')) {
      setFilterPokemons(pokemons.filter((pk) => filter(pk)));
    } else if (!query.get('search')) {
      setFilterPokemons(pokemons);
    }
  }, [pokemons, query.get('type'), query.get('search')]);

  return (
    <Container>
      <Filters setFilter={setFilterPokemons} />
      {filterPokemons.length ? (
        <Pokedex>
          {filterPokemons.map((data) => (
            <CardPokemon key={data.name} data={data} />
          ))}
          {!query.get('search') && (
            <LoadMore pokemons={pokemons} setPokemon={setPokemons} />
          )}
        </Pokedex>
      ) : (
        <PokemonNotFound />
      )}
    </Container>
  );
}
