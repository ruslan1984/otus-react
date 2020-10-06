import React, { FC, useEffect } from "react";
// import { grammarList } from "@grammar/data";
import Presenter from "./Presenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./reducer";
import { GrammarList } from "./types";

interface GrammarListProps {
  list: GrammarList;
  setList: () => void;
  loading: boolean;
}

export const List: FC<GrammarListProps> = (props: GrammarListProps) => {
  useEffect(() => {
    props.setList();
  }, []);
  return <Presenter list={props.list} loading={props.loading} />;
};

const mapStateToProps = (state) => {
  const { list, loading } = state.grammarList;
  return {
    list,
    loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setList: bindActionCreators(actions.setList, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
