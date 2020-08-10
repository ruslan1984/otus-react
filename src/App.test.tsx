import React from 'react';
import App from './App';


describe( "App", () => {
  const app = shallow( <App /> );
  const appMount = mount( <App /> );
  it( 'in box 9 Cell', () => {
    expect( app.find( 'Cell' ).length ).toBe( 9 );
  } );




  describe( "Play", () => {
    const call = appMount.find( 'Cell' );
    it( 'all Cell clicked', () => {
      let val: string = 'x';
      call.forEach( ( item1 ) => {
        const cellBtn = item1.find( 'button' );
        cellBtn.simulate( 'click' );
        expect( cellBtn.text() ).toEqual( val );
        val = ( val === 'x' ) ? '0' : 'x';
      } );
    } );

    it( 'New game', () => {
      const newBtn = appMount.find( '#new' );
      const btn = newBtn.find( 'button' );
      btn.simulate( 'click' );
      let val = 'x';
      call.forEach( ( item1 ) => {
        const cellBtn = item1.find( 'button' );
        expect( cellBtn.text() ).toEqual( '' );
        // val = ( val === 'x' ) ? '0' : 'x';
      } );
    } );

    it( 'Click pause', () => {
      const pauseBtn = appMount.find( '#pause' );
      const btn = pauseBtn.find( 'button' );
      btn.simulate( 'click' );
      expect( btn.text() ).toEqual( 'Возобновить' );
      btn.simulate( 'click' );
      expect( btn.text() ).toEqual( 'Пауза' );
    } );

  } );
} );

describe( "snapshots App", () => {
  it( 'snapshor', () => {
    expect( App ).toMatchSnapshot()
  } )
} );
