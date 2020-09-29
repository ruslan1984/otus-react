import { actions, reducer, defaultState } from "./reducer";
import { CheckState } from "./types";

describe("Login reducer", () => {
  it("login password ", () => {
    expect(reducer(defaultState, actions.auth({ user: 'root', password: 'root' }))).toEqual({
      user: "root",
      password: "root", 
      status: CheckState.initiated,
    });
  });
  it("login", () => {
    expect(reducer(defaultState, actions.login())).toEqual({
      password: "",
      status: CheckState.succeed,
      user: "",
    });
  });
  it("logout", () => {
    expect(reducer(defaultState, actions.logout())).toEqual({
      password: "",
      status: CheckState.initiated,
      user: "",
    });
  });
  it("loading", () => {
    expect(reducer(defaultState, actions.setState(CheckState.loading))).toEqual(
      {
        password: "",
        status: CheckState.loading,
        user: "",
      }
    );
  });
  it("failed", () => {
    expect(reducer(defaultState, actions.setState(CheckState.failed))).toEqual({
      password: "",
      status: CheckState.failed,
      user: "",
    });
  });
});
