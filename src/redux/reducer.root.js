import { combineReducers } from "redux";
import task from "./reducer.task";

export default combineReducers({
  task: task
});
