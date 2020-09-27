import { call } from "redux-saga/effects";
import {
  checkUserSession,
  login,
  logout,
} from "@store/reducers/auth/sagas";
import { data, login as dataLogin } from "@auth/data";
import { isAuthorised } from "@auth/session";

describe("Auth saga", (): void => {
  it("checkUserSession", async () => {
    const generator = checkUserSession();
    expect(generator.next().value).toEqual(call(isAuthorised));
    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next().done).toBe(true);
  });
  it("login ok", async () => {
    const generator = login({
      payload: { user: data.user, password: data.password },
    });

    expect(generator.next().value.payload.action).toEqual({
      type: "auth/loading",
      payload: true,
    });
    expect(generator.next().value).toEqual(
      call(dataLogin, data.user, data.password)
    );
    generator.next(true);
    expect(generator.next().value.payload.action).toEqual({
      type: "auth/auth",
      payload: 1,
    });
    expect(generator.next().value.payload.action).toEqual({
      type: "auth/loading",
      payload: false,
    });
    expect(generator.next().done).toBe(true);
  });
  it("login not ok", async () => {
    const generator = login({
      payload: { user: data.user + "1", password: data.password },
    });
    expect(generator.next().value.payload.action).toEqual({
      type: "auth/loading",
      payload: true,
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
      type: "auth/auth",
      payload: 0,
    });
    expect(generator.next().done).toBe(true);
  });
});