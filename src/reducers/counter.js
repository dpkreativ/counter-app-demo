const counter = (state, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      value: state.value + 1,
    };
  }

  return state;
};

export default counter;
