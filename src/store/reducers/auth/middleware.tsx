import { login as sessionLogin, logout as sessionLogout } from "@auth/session";
import { Middleware } from "redux";
import { login as dataLogin } from "@auth/data.tsx";

export const setLoading = (loading: boolean = false) => ({
    type: "auth/loading",
    payload: loading,
});

const login = (user: string, password: string) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        const logined = await dataLogin(user, password);
        if (logined) {
            await sessionLogin(user);
        }
        dispatch(setLoading(false));
        return logined;
    };
};
const logout = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        await sessionLogout();
        dispatch(setLoading(false));
    };
};

export const loginMiddleware: Middleware = (store) => (next) => async (
    action
) => {
    let resAction;
    switch (action.type) {
        case "auth/login": {
            const auth = store.getState().auth;
            const { user, password } = auth;
            const logined = await login(user, password)(store.dispatch);
            resAction = { ...action, payload: logined };
            break;
        }
        case "auth/logout": {
            await logout()(store.dispatch);
            resAction = { ...action, payload: false };
            break;
        }
        default:
            resAction = action;
    }
    return next(resAction);
};
