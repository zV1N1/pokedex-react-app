import React, { createContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import axios from '../services/axios';

export const PokeContext = createContext({});

export function PokeContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [filterPokemons, setFilterPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
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
        .then(setPokemons(newData))
        .then(() => setIsLoading(false));
    };

    if (pokemons.length < 3) getData();
  }, []);

  return (
    <PokeContext.Provider
      value={{
        pokemons,
        setPokemons,
        filterPokemons,
        setFilterPokemons,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
}

PokeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
