import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth, Login, CheckState } from "./types";

export const defaultState: Auth = {
  user: "",
  password: "",
  status: CheckState.initiated,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    auth: (state, { payload }: PayloadAction<Login>) => {
      return { ...state, user: payload.user, password: payload.password };
    },
    login: (state) => {
      return { ...state, status: CheckState.succeed };
    },
    logout: (state) => {
      return { ...state, status: CheckState.initiated };
    },
    setStatus: (state, action: PayloadAction<CheckState>) => {
      return { ...state, status: action.payload };
    },
  },
});

export const { actions, reducer } = authSlice;
