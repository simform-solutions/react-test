import { combineReducers } from "redux";
import sidebar from "./sidebar";
import product from "./product";
const rootReducer = combineReducers({ sidebar, product });
export default rootReducer;
