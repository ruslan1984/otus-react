import React from 'react';
import App from './App';


describe( "App", () => {
  const app = shallow( <App /> );
  const appMount = mount( <App /> );
  it( 'in box 9 Cell', () => {
    expect( appMount.find( 'Cell' ).length ).toBe( 9 );
  } );

 


  describe( "Play", () => {
    const cell = appMount.find( 'Cell' );
    
    it( 'all Cell clicked', () => {
      let val: string = 'x';
      cell.forEach( ( item1 ) => {
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
      cell.forEach( ( item1 ) => {
        const cellBtn = item1.find( 'button' );
        expect( cellBtn.text() ).toEqual('');
      } );
    } );

    it( 'Random all Cell clicked', () => {
      const appMount1 = mount( <App /> );
      const cell1 = appMount1.find( 'Cell' );
      let val1: string = 'x';
      const arrRand = randomArray(9);
      arrRand.map( ( index,id ) => {
        let curCall1 = cell1.at(index);
        let cellBtn1 = curCall1.find( 'button' );
        cellBtn1.simulate( 'click' );
        expect( cellBtn1.text() ).toEqual( val1 );
        val1 = ( val1 === 'x' ) ? '0' : 'x';
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

function randomArray(size:number){
  size--; 
  let arr = [], pool = [];
  for(var i = 0; i <= size; i++) {
      arr.push(i);
  }
  for(var i = 0; i <= size; i++) {
    var value =  arr.splice(Math.floor(Math.random() * ((size-i) - 1) + 1),1);
    pool.push(value.pop());
  }
  return pool;
}