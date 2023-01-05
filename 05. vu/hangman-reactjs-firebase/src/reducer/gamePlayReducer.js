import { createSlice } from "@reduxjs/toolkit";
export const gamePlayReducer = createSlice({
  name: "gamePlayReducer",
  initialState: {
    token: 3,
    score: 0,
    highScore: 0,
    scores:[]
  },
  reducers: {
    gameScore: (state, action) => {
      state.score = action.payload;
    },
    gameHighScore: (state, action) => {
      state.highScore = action.payload;
    },
    gameToken: (state, action) => {
      state.token = action.payload;
    },
    gameScores:(state,action)=>{
      state.scores=[...state.scores,action.payload]
    }
  },
});
export const { gameScore, gameHighScore, gameToken,gameScores } = gamePlayReducer.actions;
export default gamePlayReducer.reducer;
