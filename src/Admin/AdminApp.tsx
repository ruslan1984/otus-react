import React, { FC } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import LeftMenu from "@admin/LeftMenu/LeftMenu";
import { MainPage } from "@admin/elements";
import Header from "@admin/Header/Header";
import { Redirect } from "react-router-dom";

interface AdminAppProps {
    authorized: boolean;
}
const AdminApp: FC<AdminAppProps> = (props: AdminAppProps) => {
    if (!props.authorized) {
        return <Redirect to="/" />;
    }
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

const mapStateToProps = (state: any) => {
    return {
        authorized: state.auth.authorized,
    };
};
export default connect(mapStateToProps)(AdminApp);
