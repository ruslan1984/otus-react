import { takeEvery, put, call, fork, take } from "redux-saga/effects";

import {
    login as sessionLogin,
    logout as sessionLogout,
    isAuthorised,
} from "@auth/session";
import { CheckState } from "@auth/types";

import { login as dataLogin } from "@auth/data.tsx";
import { actions } from "@store/reducers/auth/auth";

export function* loginSaga () {
    yield fork( checkUserSession );
    yield takeEvery( actions.login.type, login );
    yield takeEvery( actions.logout.type, logout );
}
export function* login ( data: ReturnType<typeof actions.auth> ) {
    try {
        yield put( actions.loading( true ) );
        const { user, password } = data.payload;
        const logined: boolean = yield call( dataLogin, user, password );
        if ( logined ) {
            yield sessionLogin( user );
            yield put( actions.auth( CheckState.succeed ) );
        }
    } catch ( error ) {
        yield put( actions.auth( CheckState.failed ) );
    } finally {
        yield put( actions.loading( false ) );
    }
}
export function* logout () {
    yield sessionLogout();
    yield put( actions.auth( CheckState.initiated ) );
}

export function* checkUserSession () {
    const auth: boolean = yield call( isAuthorised );
    if ( auth ) {
        yield put( actions.auth( CheckState.succeed ) );
    } else {
        yield put( actions.auth( CheckState.initiated ) );
    }
}
