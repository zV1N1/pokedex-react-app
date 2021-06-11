const initialState = {
  typePoke: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'TYPE_POKEMON': {
      const newState = { ...state };
      newState.typePoke = action.payload.typePoke;
      return newState;
    }
    default: {
      return state;
    }
  }
}
