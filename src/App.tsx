import React, { FC } from "react";
import Cell from "./Cell";
import cn from "classnames";
import css from "./style.css";
import "./types";

import { Input, Button } from "./elements";

interface AppProps {
    move?: boolean;
    message: string;
    moveMessage: string;
    show: boolean;
    error: boolean;
    cellWidth?: number;
    cellHeight?: number;
    clickedPause?: boolean;
    status?: status;
    btnPauseText: btnPauseText;
    onClick: any;
    start: any;
    pause: any;
    changeCell: any;
}
interface AppState {
    move: boolean;
    message: string;
    moveMessage: string;
    show: boolean;
    error: boolean;
    cellWidth?: number;
    cellHeight?: number;
    clickedPause?: boolean;
    status?: status;
    btnPauseText: btnPauseText;
}

const inputProps = {
    min: 30,
    max: 200,
};

//Container Component
const Presenter: FC<AppProps> = (props: AppProps) => {
    const numbers = [1, 2, 3];
    const listItems = numbers.map((number) => (
        <div key={number.toString()} className={css.row}>
            {numbers.map((number1) => (
                <Cell
                    key={(number + "_" + number1).toString()}
                    move={props.move}
                    status={props.status}
                    onClick={props.onClick}
                    cellWidth={props.cellWidth}
                    cellHeight={props.cellHeight}
                />
            ))}
        </div>
    ));
    return (
        <>
            <div>{props.message}</div>
            <div>Ждем: {props.moveMessage}</div>
            <Button id="new" onClick={props.start}>
                Ноавя игра
            </Button>
            <hr />
            {listItems}
            <Button
                id="pause"
                onClick={props.pause}
                className={cn({ [css.clicked]: props.clickedPause })}
            >
                {props.btnPauseText}
            </Button>
            <hr />
            <label className={css.label} htmlFor="">
                <span className={css.labelWidth}>Ширина ячейки</span>
                <InputNumber
                    value={props.cellWidth}
                    name="cellWidth"
                    onChange={props.changeCell}
                />
            </label>
            <label className={css.label} htmlFor="">
                <span className={css.labelWidth}>Высота ячейки</span>
                <InputNumber
                    value={props.cellHeight}
                    name="cellHeight"
                    onChange={props.changeCell}
                />
            </label>
        </>
    );
};

// Proxy component
const InputNumber = (props: any) => (
    <Input required type="number" {...inputProps} {...props} />
);

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            move: true,
            message: "Ждем",
            moveMessage: "X",
            show: true,
            error: false,
            status: "new",
            btnPauseText: "Пауза",
            cellWidth: 50,
            cellHeight: 50,
        };
    }
    componentDidMount = () => {
        this.setState({ message: "Компонент смонтирован" });
    };
    componentDidUpdate = (prevProps: AppProps, prevState: AppState) => {
        if (this.state.move !== prevState.move) {
            const m = this.state.move ? "X" : "0";
            this.setState({ moveMessage: m });
        }
    };
    cellClick = () => {
        this.setState({
            move: !this.state.move,
            status: "resume",
        });
    };

    start = () => {
        this.setState({
            clickedPause: false,
            message: "Ноавя игра",
            status: "new",
            btnPauseText: "Пауза",
        });
    };
    pause = () => {
        let st = {};
        if (this.state.status == "resume" || this.state.status == "new") {
            st = {
                message: "Пауза",
                status: "pause",
                clickedPause: true,
                btnPauseText: "Возобновить",
            };
        } else {
            st = {
                message: "Игра",
                status: "resume",
                clickedPause: false,
                btnPauseText: "Пауза",
            };
        }
        this.setState(st);
    };
    //Event switch
    changeCell = (ev: React.ChangeEvent) =>
        this.setState({ [ev.target.getAttribute("name")]: ev.target.value });

    render = (props: AppProps) => {
        return (
            <>
                <Presenter
                    {...props}
                    move={this.state.move}
                    moveMessage={this.state.moveMessage}
                    message={this.state.message}
                    cellWidth={this.state.cellWidth}
                    cellHeight={this.state.cellHeight}
                    btnPauseText={this.state.btnPauseText}
                    clickedPause={this.state.clickedPause}
                    status={this.state.status}
                    start={this.start}
                    pause={this.pause}
                    changeCell={this.changeCell}
                    onClick={this.cellClick}
                />
            </>
        );
    };
}
