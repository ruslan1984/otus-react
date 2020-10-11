import { actions, reducer, defaultState } from "./reducer";
// import { CheckState } from "./types";

describe("Gramar list reducer", () => {
  it("setList", () => {
    expect(
      reducer(defaultState, actions.setList())
    ).toEqual({
      "list": [],
      "loading": false,
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
      reducer(defaultState, actions.setLoading(true))
    ).toEqual({
      "list": [],
      "loading": true,
    });
  });
});
