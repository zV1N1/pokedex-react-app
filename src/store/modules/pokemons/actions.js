import * as types from '../types';

export function currentPokemon(payload) {
  return {
    type: types.CURRENT_POKEMON,
    payload,
  };
}
