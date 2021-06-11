const initialState = {
  currentPokemon: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
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
