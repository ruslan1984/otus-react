import React, { FC, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "@store/reducers/auth/auth";
import { CheckState } from "@auth/types";
import Presenter from "./Presenter";
import reducerType from "@store/reducers";

type loginType = {
  user: string;
  password: string;
};

interface AuthProps {
  user: string;
  password: string;
  login: (object: loginType) => void;
  loading: boolean;
  status: CheckState;
  setUser: (e: string) => void;
  setPassword: (e: string) => void;
}
const AuthPage: FC<AuthProps> = (props: AuthProps) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    props.login({ user, password });
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
const mapStateToProps = (state: reducerType) => ({
  status: state.auth.status,
  loading: state.auth.loading,
});
const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(actions.login, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
