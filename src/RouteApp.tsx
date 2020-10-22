import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthPage from "@auth/AuthPage";
import AdminApp from "@admin/AdminApp";

export const RouteApp: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          Index
        </Route>
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/admin" component={AdminApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouteApp;
