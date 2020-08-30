import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import Detail from './Detail';
// import { grammarDetail } from "./data.tsx";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

const sleep = ( x: number ) => new Promise( ( r ) => setTimeout( r, x ) );

describe( "Grammar Detail", () => {
    // const { container, getByText } = render(
    //     <MemoryRouter>
    //         <Detail />
    //     </MemoryRouter>
    // );
    const detail = mount (
        <MemoryRouter>
            <Detail />
        </MemoryRouter>
    );
    console.dir(detail.debug());
});