import React from "react";
import { mount } from "enzyme";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "@store/reducers";
import thunkMiddleware from "redux-thunk";
import { loginMiddleware } from "@store/reducers/auth/middleware";
import { BrowserRouter } from "react-router-dom";
import AuthPage from "@auth/AuthPage";
import {sleep} from '@/functions';
import {data} from '@auth/data';

const middleware = [thunkMiddleware];
middleware.push(loginMiddleware);
export const store = configureStore({
    reducer,
    middleware,
});


describe("Auth", () => {
  
    const wrapper = mount(
        <Provider store={store}>
              <BrowserRouter>
                  <AuthPage />
              </BrowserRouter>
        </Provider>
      );
      const name = wrapper.find("input[name='name']");
      const password = wrapper.find("input[name='password']");
      const button = wrapper.find("button");
  
      wrapper.find('input').at(0).simulate('change', { target: { name: 'name', value: data.user } });
     

    it("should not login", async () => {
        wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: data.password+'1' } });
        wrapper.find('form').simulate("submit", { preventDefault: () => null });
        await sleep(1000);
        expect(store.getState().auth.authorized).toEqual(false);
    });
    it("should login", async () => {
        wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: data.password } });
        wrapper.find('form').simulate("submit", { preventDefault: () => null });
        await sleep(1000);
        expect(store.getState().auth.authorized).toEqual(true);
    });
    it("should data", async () => {
        expect(store.getState().auth.user).toEqual(data.user);
        expect(store.getState().auth.password).toEqual(data.password);
    });
});
