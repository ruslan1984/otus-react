import React, { FC } from "react";
import css from "./style.css";

import cn from "classnames";
import "./types";
import { CellBtn } from "./elements";

interface CellProps {
    move?: boolean;
    onClick?: any;
    value?: string;
    disabled?: boolean;
    cellWidth?: number;
    cellHeight?: number;
    status?: status;
}

interface CellState {
    disabled: boolean;
    value: "x" | "0" | "";
    cellWidth?: number;
    cellHeight?: number;
    status?: status;
}

export default class Cell extends React.Component<CellProps, CellState> {
    constructor(props: CellProps) {
        super(props);
        this.state = {
            value: "",
            disabled: false,
            cellWidth: 50,
            status: "new",
        };
        this.myClick = this.myClick.bind(this);
    }
    myClick() {
        const value = this.props.move ? "x" : "0";
        this.setState((state) => ({
            value: value,
            disabled: true,
        }));
        this.props.onClick();
    }
    componentDidUpdate() {
        if (
            this.props.cellWidth &&
            this.state.cellWidth !== this.props.cellWidth
        ) {
            this.setState({ cellWidth: this.props.cellWidth });
        }
        if (
            this.props.cellHeight &&
            this.state.cellHeight !== this.props.cellHeight
        ) {
            this.setState({ cellHeight: this.props.cellHeight });
        }
        if (this.state.status !== this.props.status) {
            let st = {};

            switch (this.props.status) {
                case "new":
                    st = {
                        status: this.props.status,
                        value: "",
                        disabled: false,
                    };
                    break;
                case "resume":
                    st = {
                        status: this.props.status,
                        disabled: this.state.value !== "",
                    };
                    break;
                case "pause":
                    st = {
                        status: this.props.status,
                        disabled: true,
                    };
                    break;
            }
            this.setState(st);
        }
    }
    render() {
        const style = {
            width: this.state.cellWidth,
            height: this.state.cellHeight,
        };

        return (
            <CellBtn
                style={style}
                className={css.cell}
                disabled={this.state.disabled}
                onClick={this.myClick}
            >
                {this.state.value}
            </CellBtn>
        );
    }
}
