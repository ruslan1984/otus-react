import React, { FC } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import LeftMenu from "@admin/LeftMenu/LeftMenu";
import { MainPage } from "@admin/elements";
import Header from "@admin/Header/Header";

const AdminApp: FC = () => {
    return (
        <>
            <Header />
            <MainPage>
                <BrowserRouter>
                    <LeftMenu />
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

export default AdminApp;
