import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "@store/reducers/auth/auth";
interface HeaderProps {
    authorized: boolean;
    logout: any;
}

const Header: FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <>
            <button onClick={props.logout}> Выйти</button>
            <hr />
        </>
    );
};

const mapStateToProps = () => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(authActions.logout, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
