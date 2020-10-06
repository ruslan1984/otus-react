import { call } from "redux-saga/effects";
import { checkUserSession, auth, logout } from "./saga";
import { data, login as dataLogin } from "./data";
import { isAuthorised } from "./session";
import { CheckState } from "./types";

describe("Auth saga", (): void => {
  it("checkUserSession", async () => {
    const generator = checkUserSession();
    expect(generator.next().value).toEqual(call(isAuthorised));
    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next().done).toBe(true);
  });
  it("login ok", async () => {
    const generator = auth({
      payload: { user: data.user, password: data.password },
    });

    expect(generator.next().value.payload.action).toEqual({
      type: "auth/setStatus",
      payload: CheckState.loading,
    });
    const logined = generator.next().value;
    expect(logined).toEqual(call(dataLogin, data.user, data.password));
    generator.next(logined);
    expect(generator.next().value.payload.action).toEqual({
      type: "auth/login",
      payload: undefined,
    });
    expect(generator.next().done).toBe(true);
  });
  it("login not ok", async () => {
    const generator = auth({
      payload: { user: data.user + "1", password: data.password },
    });
    expect(generator.next().value.payload.action).toEqual({
      type: "auth/setStatus",
      payload: CheckState.loading,
    });
    expect(generator.next().value).toEqual(
      call(dataLogin, data.user + "1", data.password)
    );
    generator.next(false);
    expect(generator.next().done).toBe(true);
  });
  it("logout", async () => {
    const generator = logout();
    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next().value.payload.action).toEqual({
      type: "auth/logout",
      payload: undefined,
    });
    expect(generator.next().done).toBe(true);
  });
});
