import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "@auth/types";

const defaultState: auth = {
    authorized: false,
    loading: false,
    password: "",
    user: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState: defaultState,
    reducers: {
        logout: (state, action: PayloadAction<any>) => {
            return { ...state, authorized: action.payload };
        },
        login: (state, action: PayloadAction<any>) => {
            return { ...state, authorized: action.payload };
        },
        loading: (state, action: PayloadAction<any>) => {
            return { ...state, loading: action.payload };
        },
        setUser: (state, action: PayloadAction<any>) => {
            return { ...state, user: action.payload };
        },
        setPassword: (state, action: PayloadAction<any>) => {
            return { ...state, password: action.payload };
        },
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
