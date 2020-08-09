import React from 'react';
import App from './App';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";
// import { configure, addDecorator } from '@storybook/react';
// import { withStyles } from 'storybook-addon-styles/react';

// addDecorator(withStyles);


export default {
  component: App,
  title: 'App',
  excludeStories: /.*Data$/,
  decorators: [withKnobs]
};

export const taskData = {
  id: '1',
  title: 'App',
  state: 'App',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

const count = number("Number", 0);


export const Default = () => <App />;
