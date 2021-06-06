import * as types from '../types';

export function saveData(payload) {
  return {
    type: types.SAVE_DATA,
    payload,
  };
}

export function currentPokemon(payload) {
  return {
    type: types.CURRENT_POKEMON,
    payload,
  };
}
