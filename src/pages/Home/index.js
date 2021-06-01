import React, { useEffect, useState } from 'react';
import { Pokedex, Container, LoadMore } from './styled';
import CardPokemon from '../../components/CardPokemon';
import Header from '../../components/Header';

import axios from '../../services/axios';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

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
      .then(() => setPokemons(newData));
  }

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

  return (
    <Container>
      <Header qty={pokemons.length} />
      <Pokedex>
        {pokemons.map((data) => (
          <CardPokemon key={data.name} data={data} />
        ))}
        <LoadMore type="button" onClick={handleClick}>
          +
        </LoadMore>
      </Pokedex>
    </Container>
  );
}
