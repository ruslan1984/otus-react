import Geometric from "./Geometric";
let geometric = new Geometric('(1+sin(3))+2-cos(1)');
test( 'Удаляем тригенометрические операции', () => {
    expect( geometric.parse()).toBe( '(1+0.1411200080598672)+2-0.5403023058681398' );
} );