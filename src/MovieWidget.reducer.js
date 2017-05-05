const INITIAL_STATE = {
  name: 'Citizen Kane',
  movieData: null,
  isFetching: false
};

function reducer(state=INITIAL_STATE, action) {
  if (action.type = 'changeName') {
    return Object.assign({}, state, {
      name: action.value
    });
  }
  return state;
}


export default reducer;
