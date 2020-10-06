import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GrammarListType, GrammarList } from "./types";

export const defaultState: GrammarListType = {
  list: [],
  loading: false,
};
export const grammarListSlice = createSlice({
  name: "grammarList",
  initialState: defaultState,
  reducers: {
    setList: (state) => state,
    fetch: (state, { payload }: PayloadAction<GrammarList>) => {
      return { ...state, list: payload };
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      return { ...state, loading: payload };
    },
  },
});
export const { actions, reducer } = grammarListSlice;
