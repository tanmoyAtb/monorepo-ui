import { combineReducers } from "redux";
import tags from "./reducers/tags/tags";
import { reducers } from "@engaze/common/src/store/rootReducer";

export default combineReducers({
  tags,
  ...reducers,
});
