import React, { FC }  from 'react';


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
const style = {
    width: '50px',
    height: '50px'
  };

const Presenter: FC<ICellProps> = ( { value, onClick, disabled } ) =>
    {
        return <button style={style} className="button" disabled={ disabled } onClick={ onClick }>{ value }</button>;
    }

export default class Cell extends React.Component<ICellProps, ICellState> {
    constructor ( props: ICellProps ) {
        super( props );
        this.state = {
            value: "",
            disabled: false
        };
        this.myClick = this.myClick.bind(this);
    }
    myClick() {
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
