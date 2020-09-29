import { combineReducers } from "redux";
import { createStore } from "redux-dynamic-modules";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import { reducer as authReducer } from "@auth/reducer";
import { getLoginModule } from "@auth/modules";

export const store = createStore(
  {
    extensions: [getSagaExtension({})],
  },
  getLoginModule()
);

export const reducer = combineReducers({
  auth: authReducer,
});
export type reducerType = ReturnType<typeof reducer>;
export default reducer;
