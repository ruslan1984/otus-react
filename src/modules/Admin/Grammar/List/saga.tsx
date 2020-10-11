import { takeEvery, put, call } from "redux-saga/effects";

import { grammarList } from "@grammar/data";
import { actions } from "./reducer";
import { Loading } from "./types";

export function* setGramarList() {
  yield put(actions.setLoading(Loading.start));
  const gl = yield call(grammarList);
  yield put(actions.fetch(gl));
  yield put(actions.setLoading(Loading.ok));
}

export function* grammarListSaga() {
  yield takeEvery(actions.setList, setGramarList);
}
