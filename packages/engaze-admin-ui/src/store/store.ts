import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middlewares: any[] = [thunk];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

export type AppState = ReturnType<typeof rootReducer>;
export type GetState = () => ReturnType<typeof rootReducer>;
export type AsyncDispatch = ThunkDispatch<AppState, void, Action>;

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
