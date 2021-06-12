import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CgPokemon } from 'react-icons/cg';
import { BiSearchAlt } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import { Container, Search } from './styled';
import axios from '../../../services/axios';

export default function SearchPokemon({ setFilter }) {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push({ pathname: '/', search: `?search=${search}` });
    try {
      const { data } = await axios.get(`pokemon/${search}`);
      const newData = [data];
      setFilter(newData);
    } catch (erro) {
      setFilter([]);
    }
  };
  return (
    <Container>
      <Search onSubmit={handleSubmit}>
        <CgPokemon size="30px" />
        <input
          type="text"
          placeholder="ex: pikachu or 25"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <BiSearchAlt color="white" size="90%" onClick={handleSubmit} />
        </button>
      </Search>
    </Container>
  );
}

SearchPokemon.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
