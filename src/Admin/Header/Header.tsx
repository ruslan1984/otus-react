import React, { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "@store/reducers/auth/auth";

interface HeaderProps {
  authorized: boolean;
  logout: () => void;
}

const Header: FC<HeaderProps> = (props: HeaderProps) => (
  <>
    <button onClick={props.logout}> Выйти</button>
    <hr />
  </>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  logout: bindActionCreators(actions.logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
