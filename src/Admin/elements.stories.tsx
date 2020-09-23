import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import {Input,  Textarea,  Button, Name,  Label} from './elements';
// import { withKnobs } from "@storybook/addon-knobs";

export default {
  component: Input,
  title: 'Elements',
  excludeStories: /.*Data$/ 

};

export const input = () => <Input />;
export const textarea = () => <Textarea />;
export const button = () => <Button>Кнопка</Button>;
export const name = () => <Name >123</Name>;
export const label = () => <Label>123</Label>;
