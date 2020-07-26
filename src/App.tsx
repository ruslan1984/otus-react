import React from 'react';
import Cell from './Cell';
import './App.css';
export default class App extends React.Component {
  constructor(props:any){
    super(props);
    this.state={
      move:true
    }
  }

  cellClick=()=>{
    this.setState( state => ( {
      move: !state.move
  } ) );
  }
  render () {
    return ( 
      <>
        <div className="div">
          <Cell onClick={this.cellClick} move={this.state.move} /><Cell onClick={this.cellClick} move={this.state.move}/><Cell onClick={this.cellClick} move={this.state.move}/>
        </div>
        <div className="div">
          <Cell move={this.state.move} onClick={this.cellClick}/><Cell move={this.state.move} onClick={this.cellClick}/><Cell move={this.state.move} onClick={this.cellClick}/>
        </div>
        <div className="div">
          <Cell move={this.state.move} onClick={this.cellClick}/><Cell move={this.state.move} onClick={this.cellClick}/><Cell move={this.state.move} onClick={this.cellClick}/>
        </div>
      </>
    );
  }
}
