import React from 'react';
import Cell from './Cell';

describe( "Has Button", () => {
  const mockFn = jest.fn();
  it( 'First click', () => {
    const cell = mount(
      <Cell onClick={ mockFn } move={ true } />
    );
    cell.simulate( 'click' );
    expect( mockFn ).toHaveBeenCalled();
    expect( cell.find( 'button' ).text() ).toEqual( 'x' );
  } );

  it( 'Secend click', () => {
    const cell = mount(
      <Cell onClick={ mockFn } move={ false } />
    );
    cell.simulate( 'click' );
    expect( mockFn ).toHaveBeenCalled();
    expect( cell.find( 'button' ).text() ).toEqual( '0' );
  } );
} );
describe( "snapshot Cell", () => {
  it( 'snapshor', () => {
    expect( Cell ).toMatchSnapshot()
  } )
} )