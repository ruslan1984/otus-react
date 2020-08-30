import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import AdminApp from '@admin/AdminApp.tsx';
import List from '@grammar/List/List';
import { grammarList } from "@grammar/data.tsx";
import { login, isAuthorised } from "@auth/data.tsx";
import Enzime, { shallow, render, mount } from "enzyme";

const sleep1 = ( x: number ) => new Promise( ( r ) => setTimeout( r, x ) );
jest.mock("@auth/data.tsx", () => ({
  isAuthorised: jest.fn()
}));
jest.mock("@auth/data.tsx", () => ({
  login: jest.fn()
}));



describe( "App", () => {
  
  // const history = createMemoryHistory()
  // (isAuthorised as jest.Mock).mockResolvedValueOnce(true);

  it( 'Grammar', async () => {
    const sleep = (x: number) => new Promise((r) => setTimeout(r, x));  
    (isAuthorised as jest.Mock).mockResolvedValueOnce(true);
    const ListMount = await mount(
      <MemoryRouter initialEntries={ [ '/admin/grammar' ] } initialIndex={ 1 }>
         <Route path="/admin/grammar">
           <List />
         </Route>
       </MemoryRouter>
    );
    await sleep( 1100 );
    console.dir(ListMount.debug());
  } );
} );
