import { combineReducers } from "redux";
import { authReducer } from "@store/reducers/auth/auth";

const reducer = combineReducers({
    auth: authReducer,
});
export default reducer;
export type reduceType = ReturnType<typeof reducer>;
