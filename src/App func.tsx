import React, { FC, useState, useEffect } from "react";
import Cell from "./Cell";
import cn from 'classnames';
import css from './style.css';
import './types';

import { Input, Button } from './elements';



let inputProps = {
    "min": 30,
    "max": 200
}
// Proxy component
const InputNumber = ( props: any ) => <Input required type='number'{ ...inputProps }  { ...props } />

interface AppProps {
    move?: boolean;
}


let cellW: number = 50;
let cellH: number = 50;

// Functional component
const AppF: FC<AppProps> = ( props: AppProps ) => {

    const [ move, setMove ] = useState( true );
    const [ message, setMessage ] = useState( 'Ждем' );
    const [ moveMessage, setMoveMessage ] = useState( 'X' );
    const [ cellWidth, setCellWidth ] = useState( 50 );
    const [ cellHeight, setCellHeight ] = useState( 50 );
    const [ clickedPause, setClickedPause ] = useState( false );
    const [ status, setStatus ] = useState( 'new' );
    const [ btnPauseText, setBtnPauseText ] = useState( 'Пауза' );


    useEffect( () => {
        setMessage( 'Компонент смонтирован' );
    }, [] );
    useEffect( () => {
        const m = ( move ) ? "X" : "0";
        setMoveMessage( m );
    }, [ move ] );
    const cellClick = () => {
        setMove( !move );
        setStatus( 'resume' );
    }
    const start = () => {
        setClickedPause( false );
        setMessage( 'Ноавя игра' );
        setStatus( 'new' );
        setBtnPauseText( 'Пауза' );
    }
    const pause = () => {
        if ( ( status == 'resume' ) || ( status == 'new' ) ) {
            setMessage( 'Пауза' );
            setStatus( 'pause' );
            setClickedPause( true );
            setBtnPauseText( 'Возобновить' );
        } else {
            setMessage( 'Игра' );
            setStatus( 'resume' );
            setClickedPause( false );
            setBtnPauseText( 'Пауза' );
        }
    }
    const changeWidth = ( ev: React.ChangeEvent ) => {
        cellW = Number( ( ev.target as HTMLInputElement ).value );

        setCellWidth( cellW );
    }
    const changeHeight = ( ev: React.ChangeEvent ) => {
        cellH = Number( ( ev.target as HTMLInputElement ).value );
    }
    const change = ( ev: React.ChangeEvent ) => {
        cellW = Number( ( ev.target as HTMLInputElement ).value );
    }
    const submit = ( e: React.FormEvent ) => {
        e.preventDefault();
        setCellHeight( cellH );
        setCellWidth( cellW );
    }

    //Array as children
    const numbers = [ 1, 2, 3 ];
    const listItems = numbers.map( ( number ) =>
        <div key={ number.toString() } className={ css.row } >
            { numbers.map( ( number1 ) =>
                <Cell key={ ( number + '_' + number1 ).toString() }
                    move={ move }
                    status={ status }
                    onClick={ cellClick }
                    cellWidth={ cellWidth }
                    cellHeight={ cellHeight }
                />
            ) }
        </div>
    );

    return (
        <>
            <div>{ message }</div>
            <div>Ждем: { moveMessage }</div>
            <Button id="new" onClick={ start }>
                Ноавя игра
                </Button>
            <hr />
            { listItems }

            <Button
                id="pause"
                onClick={ pause }
                className={ cn( { [ css.clicked ]: clickedPause } ) }
            >{ btnPauseText }</Button>
            <hr />
            <form action="" onSubmit={ submit }>
                <label className={ css.label } htmlFor="">
                    <span className={ css.labelWidth }>Ширина ячейки</span>
                    <InputNumber name="cellW" onChange={ changeWidth } />
                </label>
                <label className={ css.label } htmlFor="">
                    <span className={ css.labelWidth }>Высота ячейки</span>
                    <InputNumber name="cellH" onChange={ changeHeight } />
                </label>
                <Button>Сохранить</Button>
            </form>
        </>
    );
}


export default AppF;