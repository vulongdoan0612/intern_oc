const initialState = {
  dataUser: [],
};

const GameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "game_action":
      state.dataUser = payload;
      console.log("state", state.dataUser);
      return state;

    default:
      return state;
  }
};

export default GameReducer;
