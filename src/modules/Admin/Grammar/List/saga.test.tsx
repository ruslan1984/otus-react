import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import { actions, reducer } from "./reducer";

import { setGramarList } from "./saga";
import { grammarList } from "@grammar/data";

describe("Grammar", () => {
  it("setGramarList", () => {
    const obj = { some: "obj" };
    return expectSaga(setGramarList)
      .withReducer(reducer)
      .put(actions.setLoading(true))
      .provide([[call(grammarList), obj]])
      .put(actions.setLoading(false))
      .hasFinalState({
        list: obj,
        loading: false,
      })
      .run();
  });
});
