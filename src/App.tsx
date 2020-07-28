import React from 'react';
import Cell from './Cell';
import './App.css';

interface IAppProps {
  move?: boolean;
}
interface IAppState {
  move: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor ( props: IAppProps ) {
    super( props );
    this.state = {
      move: true
    }
  }

  cellClick = () => {
    this.setState( state => ( {
      move: !this.state.move
    } ) );
  }
  render () {
    return (
      <>
        <div className="div">
          <Cell move={ this.state.move } onClick={ this.cellClick }/>
          <Cell move={ this.state.move } onClick={ this.cellClick }/>
          <Cell move={ this.state.move } onClick={ this.cellClick }/>
        </div>
        <div className="div">
          <Cell move={ this.state.move } onClick={ this.cellClick } />
          <Cell move={ this.state.move } onClick={ this.cellClick } />
          <Cell move={ this.state.move } onClick={ this.cellClick } />
        </div>
        <div className="div">
          <Cell move={ this.state.move } onClick={ this.cellClick } />
          <Cell move={ this.state.move } onClick={ this.cellClick } />
          <Cell move={ this.state.move } onClick={ this.cellClick } />
        </div>
      </>
    );
  }
}
