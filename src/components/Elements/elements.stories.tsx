import React from "react";
import { Input, Textarea, Button, Name, Label } from "./elements";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Elements",
  decorators: [withKnobs],
};

export const elements = () => {
  const str = text("user", "text");
  return (
    <>
      <div>Input</div>
      <Input value={str} />
      <div>Textarea</div>
      <Textarea>{str}</Textarea>
      <div>Button</div>
      <Button>{str}</Button>
      <div>Name</div>
      <Name>{str}</Name>
      <div>Label</div>
      <Label>{str}</Label>
    </>
  );
};
