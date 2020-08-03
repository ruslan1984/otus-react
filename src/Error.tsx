import React from "react";
import ReactDOM from "react-dom";

export default class Error extends React.Component {

    componentWillMount(){
        throw new Error('Ошибка какая то');
    }

    render() {
        
        return <h1 className='h1'>error component</h1>;
    }
}
