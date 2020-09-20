import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "@store/reducers";
import thunkMiddleware from "redux-thunk";
import { loginMiddleware } from "@store/reducers/auth/middleware";

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
    middleware.push(loginMiddleware);
}
export const store = configureStore({
    reducer,
    middleware,
});
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
