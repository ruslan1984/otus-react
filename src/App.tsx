import React from "react";
import Cell from "./Cell";
import cn from "classnames";
import css from "./style.css";
import "./types";

import { Input, Button } from "./elements";

interface AppProps {
    move?: boolean;
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
        this.setState((state) => ({
            move: !this.state.move,
            status: "resume",
        }));
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
    changeWidth = (ev: React.ChangeEvent) => {
        this.state.cellWidth = Number((ev.target as HTMLInputElement).value);
    };
    changeHeight = (ev: React.ChangeEvent) => {
        this.state.cellHeight = Number((ev.target as HTMLInputElement).value);
    };
    submit = (e: React.FormEvent) => {
        e.preventDefault();
        this.setState({
            cellWidth: this.state.cellWidth,
            cellHeight: this.state.cellHeight,
        });
    };

    render = () => {
        const numbers = [1, 2, 3];
        const listItems = numbers.map((number) => (
            <div key={number.toString()} className={css.row}>
                {numbers.map((number1) => (
                    <Cell
                        key={(number + "_" + number1).toString()}
                        move={this.state.move}
                        status={this.state.status}
                        onClick={this.cellClick}
                        cellWidth={this.state.cellWidth}
                        cellHeight={this.state.cellHeight}
                    />
                ))}
            </div>
        ));

        return (
            <>
                <div>{this.state.message}</div>
                <div>Ждем: {this.state.moveMessage}</div>
                <Button id="new" onClick={this.start}>
                    Ноавя игра
                </Button>
                <hr />
                {listItems}

                <Button
                    id="pause"
                    onClick={this.pause}
                    className={cn({ [css.clicked]: this.state.clickedPause })}
                >
                    {this.state.btnPauseText}
                </Button>
                <hr />
                <form action="" onSubmit={this.submit}>
                    <label className={css.label} htmlFor="">
                        <span className={css.labelWidth}>Ширина ячейки</span>
                        <Input
                            type="number"
                            required
                            onChange={this.changeWidth}
                            {...inputProps}
                        />
                    </label>
                    <label className={css.label} htmlFor="">
                        <span className={css.labelWidth}>Высота ячейки</span>
                        <Input
                            type="number"
                            onChange={this.changeHeight}
                            required
                            {...inputProps}
                        />
                    </label>
                    <Button>Сохранить</Button>
                </form>
            </>
        );
    };
}
