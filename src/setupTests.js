// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom


import Enzime, { shallow, render, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import serializer from "jest-emotion";

Enzime.configure({adapter:new Adapter});

global.shallow = shallow
global.render = render
global.mount = mount

expect.addSnapshotSerializer(serializer);

console.error = message =>{
    throw new Error(message)
}
