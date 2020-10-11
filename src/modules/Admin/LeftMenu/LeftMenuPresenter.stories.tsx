import React from "react";
import LeftMenu from "./LeftMenuPresenter";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "Admin",
};
export const LeftMenu1: React.FC = () => {
  return (
    <BrowserRouter>
      <LeftMenu />
    </BrowserRouter>
  );
};
