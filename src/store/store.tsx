import { useMemo } from "react";
import { reducer } from "@grammar/List/reducer";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { grammarListSaga } from "@grammar/List/saga";

let store;
const initialState = {
  list: [],
};

function initStore(preloadedState = initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
  });

  function* rootSaga() {
    yield fork(grammarListSaga);
  }
  sagaMiddleware.run(rootSaga);
  return store;
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;
  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
