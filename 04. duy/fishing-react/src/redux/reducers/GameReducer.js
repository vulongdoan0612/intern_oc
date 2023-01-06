const initialState = {
  dataUser: [],
};

const GameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default GameReducer;
