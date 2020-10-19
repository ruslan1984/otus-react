import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { GrammarListType, GrammarList, Loading } from "./types";

export const defaultState: GrammarListType = {
  list: [],
  loading: Loading.ok,
};
export const setList = createAction("setList");
export const grammarListSlice = createSlice({
  name: "grammarList",
  initialState: defaultState,
  reducers: {
    fetch: (state, { payload }: PayloadAction<GrammarList>) => {
      return { ...state, list: payload };
    },
    setLoading: (state, { payload }: PayloadAction<Loading>) => {
      return { ...state, loading: payload };
    },
  },
});
export const { actions, reducer } = grammarListSlice;
