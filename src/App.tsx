import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthPage from "@auth/AuthPage";
import AdminAppHoc from "@admin/AdminAppHoc";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AuthPage} />
                <Route exact path="/auth" component={AuthPage} />
                <Route exact path="/admin" component={AdminAppHoc} />
                <Route path="*" render={() => 404} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
