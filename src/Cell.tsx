import React from 'react';
import './App.css';

const Presenter = ({value, disabled,  onClick}) => 
        <button className="button" disabled={disabled}  onClick={ onClick }>{ value }</button>

export default class Cell extends React.Component {
    constructor ( props: object ) {
        super( props );
        this.state = {
            value: props.value??"",
            disabled: false
        };
    }
    myClick = () => {
        this.state.value=(this.props.move)?'x':'0';
        this.setState( state => ( {
            value: state.value,
            disabled: true
        } ) );
        this.props.onClick();
    }
    render () {
        return  <Presenter onClick={this.myClick} value={this.state.value} disabled={this.state.disabled} />
        
    }
}