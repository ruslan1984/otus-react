import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import { actions, reducer } from "./reducer";
import { Loading } from "./types";
import { setGramarList } from "./saga";
import { grammarList } from "@grammar/data";

describe("Grammar", () => {
  it("setGramarList", () => {
    const obj = { some: "obj" };
    return expectSaga(setGramarList)
      .withReducer(reducer)
      .put(actions.setLoading(Loading.start))
      .provide([[call(grammarList), obj]])
      .put(actions.setLoading(Loading.ok))
      .hasFinalState({
        list: obj,
        loading: Loading.ok,
      })
      .run();
  });
});
