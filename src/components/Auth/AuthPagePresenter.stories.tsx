import React from "react";
import AuthPagePresenter from "./AuthPagePresenter";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Auth",
  decorators: [withKnobs],
};

const submit = (e) => {
  e.preventDefault();
};

export const Auth: React.FC = () => {
  const user = text("user", "");
  const password = text("password", "");
  return (
    <AuthPagePresenter
      user={user}
      password={password}
      loading={false}
      changeUser={action("user")}
      changePassword={action("password")}
      submit={submit}
    />
  );
};
