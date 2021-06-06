const initialState = {
  pokemons: [],
  currentPokemon: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_DATA': {
      const newState = { ...state };
      newState.pokemons = action.payload.newData;
      return newState;
    }
    case 'CURRENT_POKEMON': {
      const newState = { ...state };
      newState.currentPokemon = action.payload.newData;
      return newState;
    }
    default: {
      return state;
    }
  }
}
