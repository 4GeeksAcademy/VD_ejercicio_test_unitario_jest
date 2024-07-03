const{sum}= require('./app.js');
test('adds 14+9 to equal 23',()=>{
    let total= sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
test("De dolar a Euro y de Euro a Yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(10)).toBe(1462.6168224299065);
});

test("De Yen a Euro y de Euro a Libra", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');
    // Hago mi comparación (la prueba)
    expect(fromYenToPound(100)).toBe(0.5559105431309904);
});