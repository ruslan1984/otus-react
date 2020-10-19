import { takeEvery, put, call } from "redux-saga/effects";

import { grammarList } from "@grammar/data";
import { actions, setList } from "./reducer";
import { Loading } from "./types";

export function* setGramarList() {
  try {
    yield put(actions.setLoading(Loading.start));
    const gl = yield call(grammarList);
    yield put(actions.fetch(gl));
  } finally {
    yield put(actions.setLoading(Loading.ok));
  }
}

export function* grammarListSaga() {
  yield takeEvery(setList, setGramarList);
}
