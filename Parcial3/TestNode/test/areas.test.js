
import assert from 'node:assert';
import test from 'node:test';
import * as areas from '../src/areas.js';

test('areaCuadrado si le mando 2 devuelve 4', () => {
    let res = areas.areaCuadrado(2);
    assert.strictEqual(res, 4);
});
