import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import App from "@/App";
import { Provider } from "react-redux";
import reducer from "@store/reducers";
// import thunkMiddleware from "redux-thunk";
// import { loginMiddleware } from "@store/reducers/auth/middleware";
import { fork } from "redux-saga/effects";
import { loginSaga } from "@store/reducers/auth/sagas";

// const middleware = [thunkMiddleware];
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield fork(loginSaga);
}

// if (process.env.NODE_ENV === `development`) {
//     middleware.push(loginMiddleware);
// }
export const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
