import React, { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "@auth/reducer";
import { HeaderPresenter } from "./HeaderPresenter";

interface HeaderProps {
  logout: () => void;
}

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return <HeaderPresenter logout={props.logout} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: bindActionCreators(actions.logout, dispatch),
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
