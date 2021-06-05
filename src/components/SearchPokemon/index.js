import React, { useState } from 'react';
import { CgPokemon } from 'react-icons/cg';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Container, Search } from './styled';
import axios from '../../services/axios';

export default function SearchPokemon({ setData }) {
  const [search, setSearch] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/${search}`);

      setData([data]);
    } catch (erro) {
      setData([]);
    }
  };

  return (
    <Container>
      <Search onSubmit={handleSubmit}>
        <CgPokemon size="30px" />
        <input
          type="text"
          placeholder="ex: pikachu"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <Link to={`?search=${search}`}>
            <BiSearchAlt color="white" size="90%" onClick={handleSubmit} />
          </Link>
        </button>
      </Search>
    </Container>
  );
}
