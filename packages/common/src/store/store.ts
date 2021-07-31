import thunk from "redux-thunk";
import logger from "redux-logger";
import { combinedReducers } from "./rootReducer";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

const middlewares: any[] = [thunk];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

export type AppState = ReturnType<typeof combinedReducers>;
export type GetState = () => ReturnType<typeof combinedReducers>;
export type AsyncDispatch = ThunkDispatch<AppState, void, Action>;
