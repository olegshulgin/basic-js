const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  throw new NotImplementedError('Not implemented');
  var count = 0;
    while(s1.length && s2.length){
        if(s2.includes(s1.charAt(0))){
            count++;
            s2 = s2.replace(s1.charAt(0),"");
            s1 = s1.slice(1);
        }
        else {
            s1 = s1.slice(1);
        }
    }
    return count;
}

module.exports = {
  getCommonCharacterCount
};
