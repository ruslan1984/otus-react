import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { CheckState } from "@auth/types";
import { AdminAppPresenter } from "./AdminAppPresenter";
import { reducerType } from "@store/reducers";
import { ErrorBoundary } from "@components/ErrorBoundary";

interface AdminAppProps {
  status: CheckState;
}
const mapStateToProps = (state: reducerType) => {
  const { status } = state.auth;
  return {
    status,
  };
};
export class AdminApp extends Component<AdminAppProps> {
  render() {
    if (this.props.status === CheckState.initiated) {
      return <Redirect to="/" />;
    }
    return (
      <ErrorBoundary>
        <AdminAppPresenter />
      </ErrorBoundary>
    );
  }
}

export default connect(mapStateToProps)(AdminApp);
