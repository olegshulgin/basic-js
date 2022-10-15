const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  throw new NotImplementedError('Not implemented');
  let result = 0,
        numDigits = [];
    while (n) {
        num_digits.push(n % 10);
        num = Math.floor(n / 10);
    }
    for (let index = 0; index < numDigits.length; index++) {
        var num = 0;
        for (let i = numDigits.length - 1; i >= 0; i--) {
            if (i !== index) {
                num = num * 10 + numDigits[i];
            }
        }
        result = Math.max(num, result);
    }
    return result;
}

module.exports = {
  deleteDigit
};
