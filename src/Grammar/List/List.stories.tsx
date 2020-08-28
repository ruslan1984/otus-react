import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import List from './List';
// import { withKnobs } from "@storybook/addon-knobs";

export default {
  component: List,
  title: 'List',
  excludeStories: /.*Data$/ //,
  // decorators: [ withKnobs ]
};

export const taskData = {
  id: '2',
  title: 'List',
  state: 'List',
  updatedAt: new Date( 2018, 0, 1, 9, 0 ),
};

// const count = number( "Number", 0 );

storiesOf('List', module)
  .addDecorator(StoryRouter())
  .add('params', () => (
    <List/>
  ));
// export const Default = () => <List />;
