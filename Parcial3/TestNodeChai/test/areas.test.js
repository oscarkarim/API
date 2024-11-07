
import * as chai from 'chai';
import test from 'node:test';
import * as areas from '../src/areas.js';

test('areaCuadrado si le mando 2 devuelve 4', () => {
    let res = areas.areaCuadrado(2);
    chai.assert.equal(res, 4);
    chai.assert.typeOf(res, 'number');
});

test('areaCuadrado res debe ser un numero', () => {
    let res = areas.areaCuadrado(2);
    chai.expect(res).to.be.a('number');
});