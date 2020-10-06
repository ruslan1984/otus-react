import React, { FC, useState } from "react";
import AuthPagePresenter from "@/components/Auth/AuthPagePresenter";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./reducer";
import { CheckState, Login } from "./types";

interface AuthProps {
  user: string;
  password: string;
  auth: (d: Login) => void;
  status: CheckState;
}
const AuthPage: FC<AuthProps> = (props: AuthProps) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    props.auth({ user: user, password: password });
  };

  if (props.status === CheckState.succeed) {
    return <Redirect to="/admin" />;
  }
  return (
    <AuthPagePresenter
      user={user}
      password={password}
      status={props.status}
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
const mapStateToProps = (state) => {
  const { status } = state.auth;
  return {
    status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: bindActionCreators(actions.auth, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
