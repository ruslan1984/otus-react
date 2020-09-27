import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import App from "@/App";
import { Provider } from "react-redux";
import reducer from "@store/reducers";
import { fork } from "redux-saga/effects";
import { loginSaga } from "@store/reducers/auth/sagas";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(loginSaga);
}
export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
