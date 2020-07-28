import React from 'react';

import Cell from './Cell';
import { withKnobs, boolean ,text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  component: Cell,
  title: 'Cell',
  excludeStories: /.*Data$/,
  decorators: [withKnobs]
};

export const taskData = {
  id: '2',
  title: 'Cell',
  state: 'Cell',
};

export const Default = () => <Cell />;
export const clickX = () => <Cell move={true} />;
export const click0 = () => <Cell move={false} />;
