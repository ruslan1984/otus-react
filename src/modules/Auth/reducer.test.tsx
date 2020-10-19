import { actions, reducer, defaultState } from "./reducer";
import { CheckState } from "./types";

describe("Login reducer", () => {
  it("login password ", () => {
    expect(
      reducer(defaultState, actions.auth({ user: "root"}))
    ).toEqual({
      user: "root",
      status: CheckState.succeed,
    });
  });
  it("login", () => {
    expect(reducer(defaultState, actions.login())).toEqual({
      status: CheckState.succeed,
      user: "",
    });
  });
  it("logout", () => {
    expect(reducer(defaultState, actions.logout())).toEqual({
      status: CheckState.initiated,
      user: "",
    });
  });
  it("loading", () => {
    expect(
      reducer(defaultState, actions.loading())
    ).toEqual({
      status: CheckState.loading,
      user: "",
    });
  });
  it("failed", () => {
    expect(reducer(defaultState, actions.failed())).toEqual(
      {
        status: CheckState.failed,
        user: "",
      }
    );
  });
});
