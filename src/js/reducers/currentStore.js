const initialState = {
  accounts: [],
  started: false,
  last_like: null
};

export default function currentStore(state = initialState, action) {

  switch (action.type) {
    case 'SET_ENABLED':
      return {
        ...state
      }
    default:
      return state;
  }

};
