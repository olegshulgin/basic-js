const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    console.log(str)
    let arr = str.split('')
    let resultArr = []
    let result = []
    let counter = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            counter++
        } else {
            if (counter === 1) counter = ''
            resultArr.push({letter: arr[i], count: counter})
            counter = 1
        }
    }
    resultArr.forEach(el => result.push(el.count + el.letter))
    return result.join('')

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
