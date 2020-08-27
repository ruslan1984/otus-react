import React, { FC, useState, useEffect, useCallback } from "react";
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    useHistory,
} from "react-router-dom";
import css from "./style.css";
import "./types";
import GrammarList from "./Grammar/List";
import GrammarDetail from "./Grammar/Detail";
import OrphographyList from "./Orphography/List";
import { Ul, MainPage, Menu } from "./elements";

const App: FC = () => {
    const history = useHistory();
    return (
        <>
            <MainPage>
                <BrowserRouter>
                    <Menu>
                        <Ul>
                            <li>
                                <Link className={css.link} to="/grammar/">
                                    Грамматика
                                </Link>
                            </li>
                            <li>
                                <Link className={css.link} to="/orphography/">
                                    Орфография
                                </Link>
                            </li>
                        </Ul>
                    </Menu>

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
        </>
    );
};

export default App;
