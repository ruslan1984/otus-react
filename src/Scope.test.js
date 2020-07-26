import Scope from "./Scope";
let scope = new Scope('(1+2*6/3-2)+2-(1+(1+2))');
test( 'Удаляем скобки', () => {
    expect( scope.parseAll()).toBe( '3+2-4' );
} );