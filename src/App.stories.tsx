import React from 'react';

import App from './App';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  component: App,
  title: 'App',
  // Our exports that end in "Data" are not stories.
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

// export const actionsData = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
// };

export const Default = () => <App />;
