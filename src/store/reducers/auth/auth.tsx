import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth, CheckState } from "@auth/types";

const defaultState: auth = {
  loading: false,
  status: CheckState.initiated,
};

const authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    auth: (state, action: PayloadAction<CheckState>) => ({
      ...state,
      status: action.payload,
    }),
    login: (state) => state,
    logout: (state) => state,
    loading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loading: action.payload,
    }),
  },
});
export const { actions, reducer } = authSlice;
