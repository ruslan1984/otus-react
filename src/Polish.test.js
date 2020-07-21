import Polish from "./Polish";
let polish = new Polish('1 2 +');
test( 'Парсим строку', () => {
    expect( polish.parse()).toBe( 3 );
} );