import React from "react";
import ReactDOM from "react-dom";
import Cell from "./Cell";
import Unmount from "./Unmount";
import Error from "./Error";


interface IAppProps {
    move?: boolean;
}
interface IAppState {
    move: boolean;
    message: string;
    moveMessage: string;
    show: boolean;
    error: boolean;
}
const style = {
    display: "flex"
};
export default class App extends React.Component<IAppProps, IAppState> {
    constructor ( props: IAppProps ) {
        super( props );
        this.state = {
            move: true,
            message: 'Ждем',
            moveMessage: "X",
            show: true,
            error: false
        };
        this.cellClick = this.cellClick.bind( this );
        this.unmountClick = this.unmountClick.bind( this );
        this.errorClick = this.errorClick.bind( this );
    }
    componentDidMount () {
        fetch( 'https://jsonplaceholder.typicode.com/todos/1' )
            .then( response => response.json() )
            .then( json => console.log( json ) )
        this.setState( { message: 'Компонет смонтирован' } );
    }
    componentDidUpdate ( prevProps: IAppProps, prevState: IAppState ) {
        if ( this.state.move !== prevState.move ) {
            const m = ( this.state.move ) ? "X" : "0";
            this.setState( { moveMessage: m } );
        }
    }
    unmountClick () {
        this.setState( {show: !this.state.show});
    }
    errorClick () {
        this.setState( {error: !this.state.error});
    }
    componentDidCatch ( error, info ) {
        alert(error.props);    
    }
    cellClick () {
        this.setState( ( state ) => ( {
            move: !this.state.move,
        } ) );
    };
    render () {
        const numbers = [ 1, 2, 3 ];
        const listItems = numbers.map( ( number ) =>
            <div key={ number } style={ style }>
                { numbers.map( ( number1 ) =>
                    <Cell key={ number1 } move={ this.state.move } onClick={ this.cellClick } />
                ) }
            </div>
        );
        let unmount, error;
        if ( this.state.show ) {
            unmount = <Unmount />;
        } else {
            unmount = '';
        }
        if ( this.state.error ) {
            error = <Error />;
        } else {
            error = '';
        }

        return (
            <>
                { listItems }
                <br />
                <div>{ this.state.message }</div>
                <div>Ждем: { this.state.moveMessage }</div>
                <hr />
                Кликни, что бы удалить компонент<br />
                <button onClick={ this.unmountClick } >удалить</button>
                
                <br />
                { unmount }
                <hr />
                Добавить компонент с ошибкой<br />
                <button onClick={ this.errorClick } >ошибка</button>
                <br />
                { error }
                <div> { this.state.error }</div>                
            </>
        );
    }
}
