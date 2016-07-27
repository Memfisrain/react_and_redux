import {combineReducers} from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import ajaxRequestsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
	courses,
  authors,
  ajaxRequestsInProgress
});

export default rootReducer;
