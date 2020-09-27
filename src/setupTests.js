import Enzime, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import serializer from "jest-emotion";

Enzime.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

expect.addSnapshotSerializer(serializer);

console.error = (message) => {
  throw new Error(message);
};
