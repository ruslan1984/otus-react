import React from "react";
import { mount } from "enzyme";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "@store/reducers";
import { call, fork } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import AuthPage from "@auth/AuthPage";
import { loginSaga,checkUserSession, login, logout } from "@store/reducers/auth/sagas";
import { sleep } from '@/functions';
import { data, login as dataLogin } from '@auth/data';
import {
    isAuthorised
} from "@auth/session";
import { CheckState } from "@auth/types";

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


describe( "Auth saga", () => {
    it("checkUserSession", async ()=>{
        const generator = checkUserSession();
        expect(generator.next().value).toEqual(call(isAuthorised));
        expect(generator.next().value).toMatchSnapshot();
        expect(generator.next().done).toBe(true)
    });
    it("login ok", async () => {

        const generator = login( {
            payload:{user:data.user,password:data.password}
            }
        );
        expect(generator.next().value.payload.action).toEqual( { type: 'auth/loading', payload: true });
        expect(generator.next().value).toEqual(call(dataLogin,data.user,data.password));
        generator.next(true);
        expect(generator.next().value.payload.action).toEqual( { type: 'auth/auth', payload: 1 });
        expect(generator.next().value.payload.action).toEqual( { type: 'auth/loading', payload: false });
        expect(generator.next().done).toBe(true);
    });
    it("login not ok", async () => {
        const generator = login( {
            payload:{user:data.user+'1',password:data.password}
            }
        );
        expect(generator.next().value.payload.action).toEqual( { type: 'auth/loading', payload: true });
        expect(generator.next().value).toEqual(call(dataLogin,data.user+'1',data.password));
        generator.next(false);
        expect(generator.next().done).toBe(true);
    });
    it("logout", async ()=>{
        const generator = logout();
        expect(generator.next().value).toMatchSnapshot();
        expect(generator.next().value.payload.action).toEqual( { type: 'auth/auth', payload: 0 });
        expect(generator.next().done).toBe(true);
    });

});

describe( "Auth form", () => {

    const wrapper = mount(
        <Provider store={ store }>
            <BrowserRouter>
                <AuthPage />
            </BrowserRouter>
        </Provider>
    );
    const name = wrapper.find( "input[name='name']" );
    const password = wrapper.find( "input[name='password']" );
    const button = wrapper.find( "button" );

    wrapper.find( 'input' ).at( 0 ).simulate( 'change', { target: { name: 'name', value: data.user } } );

    it( "should not login #login", async () => {
        wrapper.find( 'input' ).at( 1 ).simulate( 'change', { target: { name: 'password', value: data.password + '1' } } );
        wrapper.find( 'form' ).simulate( "submit", { preventDefault: () => null } );
        await sleep( 1000 );
        expect( store.getState().auth.status ).toEqual( CheckState.initiated );
    } );
    
    it( "should login #login", async () => {
        wrapper.find( 'input' ).at( 1 ).simulate( 'change', { target: { name: 'password', value: data.password } } );
        wrapper.find( 'form' ).simulate( "submit", { preventDefault: () => null } );
        await sleep( 1000 );
        expect( store.getState().auth.status ).toEqual( CheckState.succeed );
    } );
} );