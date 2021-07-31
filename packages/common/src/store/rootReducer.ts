import { combineReducers } from "redux";
import counter from "./reducers/counter/counter";

const reducers = {
  counter,
};

const combinedReducers = combineReducers(reducers);

export { reducers, combinedReducers };
