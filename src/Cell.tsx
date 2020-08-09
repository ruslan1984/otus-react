import React, { FC, useState, useEffect } from 'react';
import {css} from '@emotion/core';

import style from './style.css';
import cn from 'classnames';
import './types';
import { CellBtn } from './elements';
import { compareByGeneratedPositionsInflated } from '../storybook-static/vendors~main.666207f8d2c40ff41fb1.bundle';

interface CellProps {
    move?: boolean;
    onClick?: any;
    value?: string;
    disabled?: boolean;
    cellWidth?: number;
    cellHeight?: number;
    status?: status;
}

//High Order Components
const HOC:any = (Component:any)=>(props:CellProps)=>
    <Component
    {...props}
        //Style component
        css={css`
            width:  ${props.cellWidth};
            height: ${props.cellHeight};
    `} />
const CellBtnHoc:FC<CellProps>=HOC(CellBtn);

//Functional component
const Cell: FC<CellProps> = ( props: CellProps ) => {
    const [ value, setValue ] = useState( '' );
    const [ status, setStatus ] = useState( 'new' );
    const [ disabled, setDisabled ] = useState( false );

    const myClick = () => {
        //Conditional rendering
        const val = ( props.move ) ? 'x' : '0';
        setValue( val );
        setDisabled( true );
        props.onClick();
    }
    useEffect( () => {
        switch ( props.status ) {
            case 'new':
                setStatus(props.status);
                setValue('');
                setDisabled(false);
                break;
            case 'resume':
                setStatus(props.status);
                setDisabled(value !== '' );
                break;
            case 'pause':
                setStatus(props.status);
                setDisabled(true);
                break;
        }
    }, [props.move,props.status] );
    return<> <CellBtnHoc
        {...props}
        disabled={ disabled }
        onClick={ myClick }
    >
        { value }

    </CellBtnHoc>
    </>
}

export default Cell;