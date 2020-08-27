import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import List from './Grammar/List';
import { grammarList } from "./Grammar/data.tsx";


const sleep = ( x: number ) => new Promise( ( r ) => setTimeout( r, x ) );

describe( "App", () => {

  const history = createMemoryHistory()
  const { container, getByText } = render(
    <Router history={ history }>
      <App />
    </Router>
  );
  let list: [];

  it( 'Grammar', async () => {
    act( () => {
      fireEvent.click( getByText( 'Грамматика' ) );
    } );
    const data = grammarList();
    list = await data.then(
      ( result: any ) => {
        return result;
      },
      ( error: any ) => {
        console.error( "Rejected: " + error );
      }
    );
    list.map( ( item: any ) => {
      expect( container.innerHTML ).toContain( item.name );
    } )
  } );
} );
