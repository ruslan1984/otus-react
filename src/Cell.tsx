import React, { FC }  from 'react';
import './App.css';

interface ICellProps {
    move?: boolean;
    onClick?: any;
    value?: string;
    disabled?: boolean;
}
interface ICellState {
    disabled: boolean;
    value: "x"|"0"|"";
}


const Presenter: FC<ICellProps> = ( { value, onClick, disabled } ) =>
    {
        return <button className="button" disabled={ disabled } onClick={ onClick }>{ value }</button>;
    }

export default class Cell extends React.Component<ICellProps, ICellState> {
    constructor ( props: ICellProps ) {
        super( props );
        this.state = {
            value: "",
            disabled: false
        };
    }
    myClick = () => {
        const value = ( this.props.move ) ? 'x' : '0';
        this.setState( state => ( {
            value: value,
            disabled: true
        } ) );
        this.props.onClick();
    }
    render () {
        return ( //<button className="button" disabled={ this.state.disabled } onClick={ this.myClick }>{ this.state.value }</button>
            <Presenter    
                value={ this.state.value }
                onClick={ this.myClick }
                disabled={ this.state.disabled } />
        );
    }
}
