import { combineReducers } from "redux";
import { authReducer } from "@store/reducers/auth/auth";

export default combineReducers({
    auth: authReducer,
});
