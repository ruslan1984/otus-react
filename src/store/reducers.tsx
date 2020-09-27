import { combineReducers } from "redux";
import { reducer as authReducer } from "@store/reducers/auth/auth";

const reducer = combineReducers({
  auth: authReducer,
});
export type reducerType = ReturnType<typeof reducer>;
export default reducer;
