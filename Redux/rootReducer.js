import { combineReducers } from "redux";
import SignupReducer from "./Reducers/SignupReducer";
import ProfilePageReducer from "./Reducers/ProfilePageReducer";
import LoginReducer from "./Reducers/LoginReducer";
import PasswordReset from "./Reducers/PasswordResetReducer";

rootReducer = combineReducers({SignupReducer, ProfilePageReducer, LoginReducer, PasswordReset})

export default rootReducer