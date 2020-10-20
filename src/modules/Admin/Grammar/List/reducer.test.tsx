import { actions, reducer, defaultState, setList } from "./reducer";
import { Loading } from "./types";

describe("Gramar list reducer", () => {
  it("setList", () => {
    expect(reducer(defaultState, setList())).toEqual({
      list: [],
      loading: 1,
    });
  });
  it("setLoading ok", () => {
    expect(reducer(defaultState, actions.setLoading(Loading.ok))).toEqual({
      list: [],
      loading: 1,
    });
  });
  it("setLoading start", () => {
    expect(reducer(defaultState, actions.setLoading(Loading.start))).toEqual({
      list: [],
      loading: 0,
    });
  });
});
