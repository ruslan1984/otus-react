import { actions, reducer, defaultState, setList } from "./reducer";
// import { CheckState } from "./types";

describe("Gramar list reducer", () => {
  it("setList", () => {
    expect(reducer(defaultState, setList())).toEqual({
      "list": [],
      "loading": 1,
    });
  });
  it("setLoading true", () => {
    expect(
      reducer(defaultState, actions.setLoading(true))
    ).toEqual({
      "list": [],
      "loading": true,
    });
  });
  it("setLoading false", () => {
    expect(
      reducer(defaultState, actions.setLoading(false))
    ).toEqual({
      "list": [],
      "loading": false,
    });
  });
});
