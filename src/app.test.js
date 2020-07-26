import app from "./app";
 test( 'main', () => {
    expect( app.main('((1+sin(3))+2-cos(1)-0.6008177021917276)/2')).toBe( '1' );
} );