import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GrammarListType, GrammarList, Loading } from "./types";

export const defaultState: GrammarListType = {
  list: [],
  loading: Loading.ok,
};
export const grammarListSlice = createSlice({
  name: "grammarList",
  initialState: defaultState,
  reducers: {
    setList: (state) => state,
    fetch: (state, { payload }: PayloadAction<GrammarList>) => {
      return { ...state, list: payload };
    },
    setLoading: (state, { payload }: PayloadAction<Loading>) => {
      return { ...state, loading: payload };
    },
  },
});
export const { actions, reducer } = grammarListSlice;
