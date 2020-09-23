import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "@auth/types";
import { CheckState } from "@auth/types";

const defaultState: auth = {
    loading: false,
    status: CheckState.initiated,
};

const authSlice = createSlice({
    name: "auth",
    initialState: defaultState,
    reducers: {
        auth: (state, action: PayloadAction<CheckState>) => {
            return { ...state, status: action.payload };
        },
        login: (state, { payload }: PayloadAction<any>) => {
            return { ...state };
        },
        logout: () => {},
        loading: (state, action: PayloadAction<boolean>) => {
            return { ...state, loading: action.payload };
        },
    },
});
export const { actions, reducer } = authSlice;
