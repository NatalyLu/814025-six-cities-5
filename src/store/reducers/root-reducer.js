import {combineReducers} from "redux";
import {reducer} from "./reducer";
import {user} from "./user";

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: reducer,
  [NameSpace.USER]: user
});
