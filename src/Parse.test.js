import Parse from "./Parse";
let parse = new Parse('1+2*6/3-2');
test( 'Парсим строку', () => {
    expect( parse.parse()).toBe( 3 );
} );