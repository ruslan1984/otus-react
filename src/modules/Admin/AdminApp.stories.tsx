import React from "react";
import Presenter from "./AdminAppPresenter";
import { Provider } from "react-redux";
import reducer from "@store/reducers";
import { fork } from "redux-saga/effects";
import { loginSaga } from "@auth/saga";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(loginSaga);
}

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default {
  title: "Admin",
};
export const AdminApp: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <Presenter />
    </Provider>
  );
};
