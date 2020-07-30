import React from "react";
import ReactDOM from "react-dom";

export default class Unmount extends React.Component {
    componentWillUnmount(){
        alert('Компонент удален');
    }
    render() {
        return <h1 className='h1'>unmout component</h1>;
    }
}
