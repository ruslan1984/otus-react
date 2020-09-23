import { combineReducers } from "redux";
import { reducer } from "@store/reducers/auth/auth";

export default combineReducers({
    auth: reducer,
});
