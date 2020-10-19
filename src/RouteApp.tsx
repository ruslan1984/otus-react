import React, { FC } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AuthPage from "@auth/AuthPage";
import AdminApp from "@admin/AdminApp";

export const RouteApp: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          Index
          <hr />
          <Link to="/auth">Админка</Link>
        </Route>
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/admin" component={AdminApp} />
        {/* <Route path="*" render={() => 404} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default RouteApp;
