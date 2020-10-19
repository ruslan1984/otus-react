import React, { Component } from "react";
import Presenter from "./Presenter";
import { connect } from "react-redux";
import { setList } from "./reducer";
import { GrammarList, Loading } from "./types";
import { reducerType } from "@store/reducers";

interface GrammarListProps {
  list: GrammarList;
  setList: () => void;
  loading: Loading;
}

const mapStateToProps = (state: reducerType) => {
  const { list, loading } = state.grammarList;
  return {
    list,
    loading,
  };
};

const mapDispatchToProps = {
  setList,
};

export class List extends Component<GrammarListProps> {
  async componentDidMount() {
    await this.props.setList();
  }
  render() {
    return <Presenter list={this.props.list} loading={this.props.loading} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
