import React, { FC } from "react";
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    useHistory,
} from "react-router-dom";
import AuthPage from "@auth/AuthPage";
import AdminApp from "@admin/AdminApp";

const App: FC = () => {
    // const history = useHistory();
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AuthPage} />
                <Route exact path="/auth" component={AuthPage} />
                <Route exact path="/admin" component={AdminApp} />
                <Route path="*" render={() => 404} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
