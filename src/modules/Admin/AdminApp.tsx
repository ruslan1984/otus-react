import React, { FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { CheckState } from "@auth/types";
import { AdminAppPresenter } from "./AdminAppPresenter";
import reducerType from "@store/reducers";
import { ErrorBoundary } from "@components/ErrorBoundary";

interface AdminAppProps {
  status: CheckState;
}
const AdminApp: FC<AdminAppProps> = (props: AdminAppProps) => {
  if (props.status === CheckState.initiated) {
    return <Redirect to="/" />;
  }
  return (
    <ErrorBoundary>
      <AdminAppPresenter />
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: reducerType) => {
  const { status } = state.auth;
  return {
    status,
  };
};
export default connect(mapStateToProps)(AdminApp);
