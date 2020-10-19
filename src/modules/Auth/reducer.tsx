import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth, Login, CheckState } from "./types";

export const defaultState: Auth = {
  user: "",
  status: CheckState.initiated,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    auth: (state: Auth, { payload }: PayloadAction<Login>) => {
      return { ...state, user: payload.user, status: CheckState.succeed };
    },
    login: (state: Auth) => {
      return { ...state, status: CheckState.succeed };
    },
    logout: (state: Auth) => {
      return { ...state, status: CheckState.initiated };
    },
    loading: (state: Auth) => {
      return { ...state, status: CheckState.loading };
    },
    failed: (state: Auth) => {
      return { ...state, status: CheckState.failed };
    },
    zeroData: (state: Auth) => {
      return { ...state, status: CheckState.zeroData };
    },
  },
});

export const { actions, reducer } = authSlice;
