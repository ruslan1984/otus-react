import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import { actions, reducer, defaultState } from "./reducer";

import { CheckState } from "./types";
import {
  isAuthorised,
  login as sessionLogin,
  logout as sessionLogout,
} from "./session";
import { checkUserSession, auth, logout } from "./saga";
import { data, login as dataLogin } from "./data";

describe("redux saga test plan", () => {
  it("checkUserSession", () => {
    const isAuth = true;
    return expectSaga(checkUserSession)
      .withReducer(reducer)
      .provide([[call(isAuthorised), isAuth]])
      .put(actions.setStatus(CheckState.succeed))
      .hasFinalState({
        password: "",
        status: CheckState.succeed,
        user: "",
      })
      .run();
  });
  it("auth", () => {
    const logined = true;
    return expectSaga(auth, {
      type: actions.auth.type,
      payload: { user: "root", password: "root" },
    })
      .withReducer(reducer)
      .provide([[call(isAuthorised), auth]])
      .put(actions.setStatus(CheckState.loading))
      .provide([[call(dataLogin, "root", "root"), logined]])
      .call(sessionLogin, "root")
      .put(actions.login())
      .hasFinalState({
        user: "",
        password: "",
        status: CheckState.succeed,
      })
      .run();
  });
  it("logout", () => {
    return expectSaga(logout)
      .withReducer(reducer)
      .call(sessionLogout)
      .put(actions.logout())
      .hasFinalState({
        user: "",
        password: "",
        status: CheckState.initiated,
      })
      .run();
  });
});
