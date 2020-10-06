import { takeEvery, put, call } from "redux-saga/effects";

import { grammarList } from "@grammar/data";
import { actions } from "./reducer";

export function* setGramarList() {
  yield put(actions.setLoading(true));
  const gl = yield call(grammarList);
  yield put(actions.fetch(gl));
  yield put(actions.setLoading(false));
}

export function* grammarListSaga() {
  yield takeEvery(actions.setList, setGramarList);
}
