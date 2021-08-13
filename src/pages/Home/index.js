import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { Pokedex, Container } from './styled';
import CardPokemon from '../../components/Home/CardPokemon';
import LoadMore from '../../components/Home/LoadMore';
import Filters from '../../components/Home/Filters';

import { usePoke } from '../../hooks/usePokemon';
import Loading from '../../components/Home/PokemonNotFound';

export default function Home() {
  const query = new URLSearchParams(useLocation().search);
  const { pokemons, isLoading, filterPokemons, setFilterPokemons } = usePoke();

  function filter(p) {
    return p.types[0].type.name === query.get('type');
  }

  useEffect(() => {
    if (query.get('type')) {
      setFilterPokemons(pokemons.filter((pk) => filter(pk)));
    } else if (!query.get('search')) {
      setFilterPokemons(pokemons);
    }
  }, [pokemons, query.get('type'), query.get('search')]);

  return (
    <Container>
      <Filters />
      {!isLoading && filterPokemons.length ? (
        <Pokedex>
          {filterPokemons.map((data) => (
            <CardPokemon key={data.name} data={data} />
          ))}
          {!query.get('search') && <LoadMore />}
        </Pokedex>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
