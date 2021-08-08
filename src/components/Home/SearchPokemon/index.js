import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CgPokemon } from 'react-icons/cg';
import { BiSearchAlt } from 'react-icons/bi';
import { Container, Search } from './styled';

import axios from '../../../services/axios';

import { usePoke } from '../../../hooks/usePokemon';

export default function SearchPokemon() {
  const [search, setSearch] = useState('');
  const { setFilterPokemons, setIsLoading } = usePoke();
  const history = useHistory();

  const searchPokemon = async (e) => {
    e.preventDefault();

    if (search.length > 0) {
      history.push({ pathname: '/', search: `?search=${search}` });
      setIsLoading(true);
      try {
        const { data } = await axios.get(`pokemon/${search}`);

        const newData = [data];
        setFilterPokemons(newData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setFilterPokemons([]);
      }
    }
  };

  return (
    <Container>
      <Search onSubmit={searchPokemon}>
        <CgPokemon size="30px" />
        <input
          type="text"
          placeholder="ex: pikachu or 25"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <BiSearchAlt color="white" size="90%" onClick={searchPokemon} />
        </button>
      </Search>
    </Container>
  );
}
