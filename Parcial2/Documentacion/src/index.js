/**
 * Funcion que calcula el area de un triangulo, dados su base y altura
 * @param {number} base - base del triangulo
 * @param {number} altura - altura del triangulo
 * @return {number} area del triangulo
 */
function areatriangulo(base, altura) {
    return base * altura / 2;
}

/**
 * Funcion que calcula el area de un circulo, dado su radio
 * @param {number} radio - radio del circulo
 * @return {number} area del circulo
 */
function areacirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}
module.exports.areatriangulo = areatriangulo;
module.exports.areacirculo = areacirculo;

/**
 * this is MyClass.
 */
export default class MyClass {
    /**
     * @param {number} a - this is a value.
     * @param {number} b - this is a value.
     * @return {number} result of the sum value.
     */
    sum(a, b){
      return a + b;
    }
  }