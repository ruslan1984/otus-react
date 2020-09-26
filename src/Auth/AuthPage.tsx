import React, { FC, useState, useEffect, useCallback } from "react";
import Presenter from "./Presenter";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "@store/reducers/auth/auth";

interface AuthProps {
    user: string;
    password: string;
    login: () => void;
    loading: boolean;
    authorized: boolean;
    setUser: (u: string) => void;
    setPassword: (p: string) => void;
}
const AuthPage: FC<AuthProps> = (props: AuthProps) => {
    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        props.login();
    };
    if (props.authorized) {
        return <Redirect to="/admin" />;
    }
    return (
        <Presenter
            user={props.user}
            password={props.password}
            loading={props.loading}
            changeUser={(ev: React.FormEvent) =>
                props.setUser((ev.target as HTMLInputElement).value)
            }
            changePassword={(ev: React.FormEvent) =>
                props.setPassword((ev.target as HTMLInputElement).value)
            }
            submit={submit}
        />
    );
};
const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user,
        password: state.auth.password,
        authorized: state.auth.authorized,
        loading: state.auth.loading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(authActions.login, dispatch),
        setUser: bindActionCreators(authActions.setUser, dispatch),
        setPassword: bindActionCreators(authActions.setPassword, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
