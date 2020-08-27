import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import Detail from './Detail';
// import { withKnobs } from "@storybook/addon-knobs";

export default {
  component: Detail,
  title: 'Detail',
  excludeStories: /.*Data$/ 

};



storiesOf('Detail', module)
  .addDecorator(StoryRouter())
  .add('params', () => (
    <Detail/>
  ));
