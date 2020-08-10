import React from 'react';
import Cell from './Cell';

describe( "Has Button", () => {
  const mockFn = jest.fn();
  it( 'First click', () => {
    const cell = mount(
      <Cell status={"new"} cellWidth={50} cellHeight={50} onClick={ mockFn } move={ true } />
    );
    const btn = cell.find( 'button' );
    btn.simulate( 'click' );
    expect( mockFn ).toHaveBeenCalled();
    expect( btn.text() ).toEqual( 'x' );
  } );

  it( 'Secend click', () => {
    const cell = mount(
      <Cell status={"new"} cellWidth={50} cellHeight={50} onClick={ mockFn } move={ false } />
    );
    const btn = cell.find( 'button' );
    btn.simulate( 'click' );

    expect( mockFn ).toHaveBeenCalled();
    expect( btn.text() ).toEqual( '0' );
  } );
} );


describe( "snapshot Cell", () => {
  it( 'snapshot', () => {
    expect( Cell ).toMatchSnapshot()
  } )
} );