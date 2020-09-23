import React, { FC, useState, useEffect, useCallback } from "react";
import Presenter from "./Presenter";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "@store/reducers/auth/auth";
import { CheckState } from "@auth/types";

interface AuthProps {
    user: string;
    password: string;
    login: any;
    loading: boolean;
    status: any;
    setUser: any;
    setPassword: any;
}
const AuthPage: FC<AuthProps> = (props: AuthProps) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        props.login({ user: user, password: password });
    };

    if (props.status === CheckState.succeed) {
        return <Redirect to="/admin" />;
    }
    return (
        <Presenter
            user={user}
            password={password}
            loading={props.loading}
            changeUser={(ev: React.FormEvent) =>
                setUser((ev.target as HTMLInputElement).value)
            }
            changePassword={(ev: React.FormEvent) =>
                setPassword((ev.target as HTMLInputElement).value)
            }
            submit={submit}
        />
    );
};
const mapStateToProps = (state: any) => {
    return {
        status: state.auth.status,
        loading: state.auth.loading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(actions.login, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
