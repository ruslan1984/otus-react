import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { fork } from "redux-saga/effects";
import { Provider } from "react-redux";

import App from "@/App";
import reducer from "@store/reducers";
import { loginSaga } from "@auth/saga";
import { grammarListSaga } from "@grammar/List/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

function* rootSaga() {
  yield fork(loginSaga);
  yield fork(grammarListSaga);
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
