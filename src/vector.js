/**
 * @module Vector
 * A library of vector functions.
 */
/*module.exports = exports = {
  rotate: rotate,
  dotProduct: dotProduct,
  magnitude: magnitude,
  normalize: normalize
}*/

/**
 * @function add
 * Sums two vectors
 * @param {Vector} a - the first vector to add
 * @param {Vector} b - the second vector to add
 * @returns a new vector representing the sum of the originals
 */
export function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  }
}

/**
 * @function subtract
 * Subtracts two vectors
 * @param {Vector} a - the vector to subtract from
 * @param {Vector} b - the second vector to subtract with
 * @returns a new vector representing the difference of the originals
 */
export function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  }
}

/**
 * @function rotate
 * Rotates a vector about the Z-axis
 * @param {Vector} a - the vector to rotate
 * @param {float} angle - the angle to roatate by (in radians)
 * @returns a new vector representing the rotated original
 */
export function rotate(a, angle) {
  return {
    x: a.x * Math.cos(angle) - a.y * Math.sin(angle),
    y: a.x * Math.sin(angle) + a.y * Math.cos(angle)
  }
}

/**
 * @function dotProduct
 * Computes the dot product of two vectors
 * @param {Vector} a the first vector
 * @param {Vector} b the second vector
 * @return the computed dot product
 */
export function dotProduct(a, b) {
  return a.x * b.x + a.y * b.y
}

/**
 * @function magnitude
 * Computes the magnitude of a vector
 * @param {Vector} a the vector
 * @returns the calculated magnitude
 */
export function magnitude(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
}

/**
 * @function normalize
 * Normalizes the vector
 * @param {Vector} a the vector to normalize
 * @returns a new vector that is the normalized original
 */
export function normalize(a) {
  var mag = magnitude(a);
  return {x: a.x / mag, y: a.y / mag};
}
