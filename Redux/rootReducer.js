import { combineReducers } from "redux";
import SignupReducer from "./Reducers/SignupReducer";
import ProfilePageReducer from "./Reducers/ProfilePageReducer";
import LoginReducer from "./Reducers/LoginReducer";
import PasswordReset from "./Reducers/PasswordResetReducer";
import UploadNotesReducer from "./Reducers/UploadNotesReducer";

rootReducer = combineReducers({SignupReducer, ProfilePageReducer, LoginReducer, PasswordReset, UploadNotesReducer})

export default rootReducer