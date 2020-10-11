import React, { Component, FormEvent } from "react";
import AuthPagePresenter from "./AuthPagePresenter";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "./reducer";
import { CheckState, Login } from "./types";
import { reducerType } from "@store/reducers";

interface AuthProps {
  user: string;
  password: string;
  auth: (d: Login) => void;
  status: CheckState;
}

const mapStateToProps = (state: reducerType) => {
  const { status } = state.auth;
  return {
    status,
  };
};

const mapDispatchToProps = {
  auth: actions.auth,
};

export class AuthPage extends Component<AuthProps> {
  state = {
    user: "",
    password: "",
  };

  submit = async (e: FormEvent) => {
    e.preventDefault();
    const { auth } = this.props;
    await auth({
      user: this.state.user,
      password: this.state.password,
    });
  };

  render() {
    if (this.props.status === CheckState.succeed) {
      return <Redirect to="/admin" />;
    }
    return (
      <AuthPagePresenter
        user={this.state.user}
        password={this.state.password}
        status={this.props.status}
        changeUser={(ev: React.FormEvent) =>
          this.setState({ user: (ev.target as HTMLInputElement).value })
        }
        changePassword={(ev: React.FormEvent) =>
          this.setState({ password: (ev.target as HTMLInputElement).value })
        }
        submit={this.submit}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
