import { configureStore } from "@reduxjs/toolkit";
import gamePlayReducer from "./reducer/gamePlayReducer";
export default configureStore({
  reducer: {
    gamePlayReducer: gamePlayReducer,
  },
});