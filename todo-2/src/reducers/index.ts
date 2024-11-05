import { combineReducers } from "redux";
import TodoActions from "./TodoActions";

const allReducers = combineReducers({
  TodoActions: TodoActions,
});
export default allReducers;
