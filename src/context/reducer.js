const reducer = (state, action) => {
  switch (action.type) {
    case "setAvatar": {
      return {
        ...state,
        avatar: action.payload,
      };
    }
    case "setUser": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
