import { take, put, call, fork, all } from "redux-saga/effects";

import {
  login as sessionLogin,
  logout as sessionLogout,
  isAuthorised,
} from "./session";
import { login as serverLogin } from "./data";
import { actions } from "./reducer";

export function* checkUserSession() {
  const auth: boolean = yield call(isAuthorised);
  if (auth) {
    yield put(actions.login());
  } else {
    yield put(actions.logout());
  }
}

export function* auth(data: ReturnType<typeof actions.auth>) {
  try {
    yield put(actions.loading());
    const { user, password } = data.payload;
    if (user.trim() === "" || password.trim() === "") {
      yield put(actions.zeroData());
      return false;
    }
    const logined: boolean = yield call(serverLogin, user, password);
    if (logined) {
      yield all([call(sessionLogin, user), put(actions.login())]);
    } else {
      yield put(actions.failed());
    }
    return logined;
  } catch (error) {
    yield put(actions.logout());
  }
}
export function* logout() {
  yield all([call(sessionLogout), put(actions.logout())]);
}

export function* loginSaga() {
  yield fork(checkUserSession);
  let logined, ath;
  while (true) {
    ath = yield take(actions.auth.type);
    logined = yield* auth(ath);
    if (logined) {
      yield take(actions.logout.type);
      yield* logout();
    }
  }
}
