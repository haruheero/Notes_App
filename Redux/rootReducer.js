import { combineReducers } from "redux";
import SignupReducer from "./Reducers/SignupReducer";
import ProfilePageReducer from "./Reducers/ProfilePageReducer";
import LoginReducer from "./Reducers/LoginReducer";

rootReducer = combineReducers({SignupReducer, ProfilePageReducer, LoginReducer})

export default rootReducer