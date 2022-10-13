const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(let matrix) {
  throw new NotImplementedError('Not implemented');
  let countCat = 0;
  for(var i = 0; i < matrix.length; i++) {
    let cube = matrix[i];
    for(var j = 0; j < matrix.length; j++) {
      if cube[j] = "^^" countCat++;
    } 
  }
  return countCat;
}

module.exports = {
  countCats
};
