import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "@admin/Header/Header";
import LeftMenuPresenter from "@components/Admin/LeftMenu/LeftMenuPresenter";
import { MainPage } from "@components/Elements/elements";

export const AdminAppPresenter: FC = () => {
  return (
    <>
      <Header />
      <MainPage>
        <BrowserRouter>
          <LeftMenuPresenter />
          <Switch>
            <Route exact path="/admin/grammar">
              GrammarList
            </Route>
            <Route exact path="/admin/orphography">
              OrphographyList
            </Route>
            <Route exact path="/admin/*" render={() => 404} />
          </Switch>
        </BrowserRouter>
      </MainPage>
    </>
  );
};
export default AdminAppPresenter;
