import React from "react";
import Cell from "./Cell";

interface IAppProps {
    move?: boolean;
}
interface IAppState {
    move: boolean;
}
const style = {
    display:"flex"
  };
export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            move: true,
        };
        this.cellClick = this.cellClick.bind(this);
    }

    cellClick() {
        this.setState((state) => ({
            move: !this.state.move,
        }));
    };
    render() {
        return (
            <>
                <div style={style}>
                    <Cell move={this.state.move} onClick={this.cellClick} />
                    <Cell move={this.state.move} onClick={this.cellClick} />
                    <Cell move={this.state.move} onClick={this.cellClick} />
                </div>
                <div style={style} className="div">
                    <Cell move={this.state.move} onClick={this.cellClick} />
                    <Cell move={this.state.move} onClick={this.cellClick} />
                    <Cell move={this.state.move} onClick={this.cellClick} />
                </div>
                <div style={style} className="div">
                    <Cell move={this.state.move} onClick={this.cellClick} />
                    <Cell move={this.state.move} onClick={this.cellClick} />
                    <Cell move={this.state.move} onClick={this.cellClick} />
                </div>
            </>
        );
    }
}
