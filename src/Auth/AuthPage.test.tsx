import React from "react";
import { mount } from "enzyme";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "@store/reducers";
import { fork } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import AuthPage from "@auth/AuthPage";
import { loginSaga } from "@store/reducers/auth/sagas";
import { sleep } from "@/functions";
import { data } from "@auth/data";
import { CheckState } from "@auth/types";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(loginSaga);
}

const store = configureStore({ reducer, middleware: [sagaMiddleware] });
sagaMiddleware.run(rootSaga);

describe("Auth form", () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <AuthPage />
      </BrowserRouter>
    </Provider>
  );

  wrapper
    .find("input")
    .at(0)
    .simulate("change", { target: { name: "name", value: data.user } });

  it("should not login #login", async () => {
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        target: { name: "password", value: data.password + "1" },
      });
    wrapper.find("form").simulate("submit", { preventDefault: () => null });
    await sleep(1000);
    expect(store.getState().auth.status).toEqual(CheckState.initiated);
  });

  it("should login #login", async () => {
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        target: { name: "password", value: data.password },
      });
    wrapper.find("form").simulate("submit", { preventDefault: () => null });
    await sleep(1000);
    expect(store.getState().auth.status).toEqual(CheckState.succeed);
  });
});
