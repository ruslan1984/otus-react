import React, { FC, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import GrammarList from "@grammar/List/List";
import GrammarDetail from "@grammar/Detail/Detail";
import OrphographyList from "@orph/List/List";
import LeftMenu from "@admin/LeftMenu";
import { MainPage } from "@admin/elements";
import AuthPage from "@auth/AuthPage";
import Header from "@admin/Header";
import { isAuthorised } from "@auth/data.tsx";

const AdminApp: FC = () => {
    const history = useHistory();
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        (async () => {
            setAuth(await isAuthorised());
        })();
    }, []);
    if (!auth) {
        return <AuthPage />;
    } else {
        return (
            <>
                <Header history={history} />
                <MainPage>
                    <BrowserRouter>
                        <LeftMenu />
                        <Switch>
                            <Route
                                exact
                                path="/admin/grammar"
                                component={GrammarList}
                            />
                            <Route
                                exact
                                path="/admin/grammar/:id"
                                component={GrammarDetail}
                            />
                            <Route
                                exact
                                path="/admin/orphography"
                                component={OrphographyList}
                            />
                            <Route exact path="/admin/*" render={() => 404} />
                        </Switch>
                    </BrowserRouter>
                </MainPage>
            </>
        );
    }
};

export default AdminApp;
