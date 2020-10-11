import React from "react";
import HeaderPresenter from "./HeaderPresenter";
import { action } from "@storybook/addon-actions";

export default {
  title: "Admin",
};
export const Header: React.FC<{}> = () => {
  return <HeaderPresenter logout={action("logout")} />;
};
