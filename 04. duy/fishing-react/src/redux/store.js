import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import GameReducer from "./reducers/GameReducer";

const rootReducer = combineReducers({
  GameReducer,
});
const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;
