import React from 'react';
import {Input,  Textarea,  Button, Name,  Label} from './elements';


export default {
  component: Input,
  title: 'Elements',
  excludeStories: /.*Data$/ 

};

export const input = () => <Input />;
export const textarea = () => <Textarea />;
export const button = () => <Button>Кнопка</Button>;
export const name = () => <Name >Name</Name>;
export const label = () => <Label>Label</Label>;
