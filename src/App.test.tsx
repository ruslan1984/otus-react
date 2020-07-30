import React from 'react';
import App from './App';

describe( "App", () => {
  it('9 Cell', () => {
    const app = shallow(<App />);
    expect(app.find('Cell').length).toBe(9);
  });  
} );

describe( "snapshots App", () => {
  it( 'snapshor', () => {
    expect( App ).toMatchSnapshot()
  } )
} )