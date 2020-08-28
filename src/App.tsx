import React, { FC } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./types";
import GrammarList from "./Grammar/List";
import GrammarDetail from "./Grammar/Detail";
import OrphographyList from "./Orphography/List";
import LeftMenu from "./LeftMenu";
import { MainPage } from "./elements";

const App: FC = () => {
    const history = useHistory();
    return (
        <MainPage>
            <BrowserRouter>
                <LeftMenu />
                <Switch>
                    <Route exact path="/grammar" component={GrammarList} />
                    <Route
                        exact
                        path="/grammar/:id"
                        component={GrammarDetail}
                    />

                    <Route
                        exact
                        path="/orphography"
                        component={OrphographyList}
                    />
                </Switch>
            </BrowserRouter>
        </MainPage>
    );
};

export default App;
