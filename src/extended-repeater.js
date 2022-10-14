const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let add;
  let valueSep;
  let valueAdd;

  if (String(options.addition)) {
    add = options.addition;
    console.log(options.addition);
  }

  if (options.additionSeparator && options.additionRepeatTimes) {
    valueAdd = options.additionSeparator.length;
    add = options.additionSeparator + add;
  } else if (options.additionRepeatTimes) {
    valueAdd = 1;
    add = "|" + add;
  }

  if (options.additionRepeatTimes) {
    add = add.repeat(options.additionRepeatTimes);
  }

  if (add) {
    add = String(add).slice(valueAdd);
    str = str + add;
  }

  if (options.separator) {
    valueSep = options.separator.length;
    str = options.separator + str;
  }

  if (options.repeatTimes && options.separator) {
    str = str.repeat(options.repeatTimes);
  } else if (options.repeatTimes) {
    valueSep = 1;
    str = "+" + str;
    str = str.repeat(options.repeatTimes);
  }

  str = str.slice(valueSep);

  return str;
}

module.exports = {
  repeater
};
