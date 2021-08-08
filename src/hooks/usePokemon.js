import { useContext } from 'react';
import { PokeContext } from '../contexts/PokeContext';

export function usePoke() {
  const value = useContext(PokeContext);

  return value;
}
