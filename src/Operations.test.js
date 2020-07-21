import Operations from "./Operations";

test( 'Сложение', () => {
    expect( Operations.sum( 1, 2 ) ).toBe( 3 );
} );
test( 'Вычитание', () => {
    expect( Operations.sub( 3, 2 ) ).toBe( 1 );
} );
test( 'Умножение', () => {
    expect( Operations.mult( 3, 2 ) ).toBe( 6 );
} );
test( 'Деление', () => {
    expect( Operations.div( 4, 2 ) ).toBe( 2 );
} );

test( 'Синус', () => {
    expect( Operations.sin(90) ).toBe( 0.8939966636005579 );
} );
test( 'Косинус', () => {
    expect( Operations.cos( 1 ) ).toBe( 0.5403023058681398 );
} );
test( 'Тангенс', () => {
    expect( Operations.tn( 1 ) ).toBe( 1.5574077246549023 );
} );
test( 'Катангенс', () => {
    expect( Operations.ctn( 1 ) ).toBe( 0.6420926159343306 );
} );
test( 'Степень', () => {
    expect( Operations.degree( 2, 3 ) ).toBe( 8 );
} );
test( 'Квадрат', () => {
    expect( Operations.square( 3 ) ).toBe( 9 );
} );
test( 'Факториал', () => {
    expect( Operations.factorial( 3 ) ).toBe( 6 );
} );

test( 'Фибеначи', () => {
    expect( Operations.fib( 4 ) ).toBe( 5 );
} );
