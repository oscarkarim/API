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