import React, { FC }  from 'react';


interface CellProps {
    move?: boolean;
    onClick?: any;
    value?: string;
    disabled?: boolean;
}
interface CellState {
    disabled: boolean;
    value: "x"|"0"|"";
}
const style = {
    width: '50px',
    height: '50px'
};

const Presenter: FC<CellProps> = ( { value, onClick, disabled } ) =>
    <button style={style} className="button" disabled={ disabled } onClick={ onClick }>{ value }</button>;


export default class Cell extends React.Component<CellProps, CellState> {
    constructor ( props: CellProps ) {
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
            value: value
        } ) );
        this.props.onClick();
    }
    shouldComponentUpdate(nextProps:CellProps, nextState:CellState){
        if (this.state.value){
            return this.state.disabled = true;
        }
        return this.state
    } 
    render () {
        return ( 
            <Presenter    
                value={ this.state.value }
                onClick={ this.myClick }
                disabled={ this.state.disabled } />
        );
    }
}
