import { takeEvery, put, call, fork } from "redux-saga/effects";

import {
  login as sessionLogin,
  logout as sessionLogout,
  isAuthorised,
} from "./session";
import { CheckState } from "./types";
import { login as dataLogin } from "./data";
import { actions } from "./reducer";

export function* checkUserSession() {
  const auth: boolean = yield call(isAuthorised);
  if (auth) {
    yield put(actions.setState(CheckState.succeed));
  } else {
    yield put(actions.setState(CheckState.initiated));
  }
}

export function* auth(data: ReturnType<typeof actions.auth>) {
  try {
    yield put(actions.setState(CheckState.loading));
    const { user, password } = data.payload;
    if (user.trim() === "" || password.trim() === "") {
      return put(actions.setState(CheckState.failed));
    }
    const logined: boolean = yield call(dataLogin, user, password);
    if (logined) {
      yield call(sessionLogin, user);
      yield put(actions.login());
    } else {
      yield put(actions.setState(CheckState.failed));
    }
  } catch (error) {
    yield put(actions.logout());
  }
}
export function* logout() {
  yield call(sessionLogout);
  yield put(actions.logout());
}

export function* loginSaga() {
  yield fork(checkUserSession);
  yield takeEvery(actions.auth.type, auth);
  yield takeEvery(actions.logout.type, logout);
}
