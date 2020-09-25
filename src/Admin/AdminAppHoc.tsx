import React, { FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AdminApp from "./AdminApp";

interface AdminAppProps {
    authorized: boolean;
}
const AdminAppHoc: FC<AdminAppProps> = (props: AdminAppProps) => {
    if (!props.authorized) {
        return <Redirect to="/" />;
    }
    return <AdminApp />;
};

const mapStateToProps = (state: any) => {
    return {
        authorized: state.auth.authorized,
    };
};
export default connect(mapStateToProps)(AdminAppHoc);
