import * as types from '../types';

export function typePokemon(payload) {
  return {
    type: types.TYPE_POKEMON,
    payload,
  };
}
