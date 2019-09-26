import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import loadingStatus from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  loadingStatus
});

export default rootReducer;
