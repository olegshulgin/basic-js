const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(state = true) {
    this.state = state;
  }

  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabetArray = this.alphabet.split('');
  
  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    console.log(key)

    let idMassage = [];
    let idKey = [];
    let specialSymbols = [];
    let idRes;
    let res;
    message = message.toLowerCase();
    key = key.toLowerCase();

    const messageArray = message.split('');
    messageArray.forEach((element, index) => {
      if(this.alphabetArray.indexOf(element) === -1) {
        specialSymbols.push([element,index])
      }

      return idMassage.push(this.alphabetArray.indexOf(element))
    });
    idMassage = idMassage.filter(element => element !== -1)

    let newKey = key.repeat(idMassage.length).slice(0, idMassage.length);
    const keyArray = newKey.split('');
    keyArray.forEach(element => idKey.push(this.alphabetArray.indexOf(element))); 

    idRes = idMassage.map( (element, index) => element === - 1 ? ' ' : element + idKey[index]);
    res = idRes.map(element => element === ' ' ? ' ' : this.alphabetArray[element] ? this.alphabetArray[element] : this.alphabetArray[element - this.alphabetArray.length]);
    specialSymbols.forEach(element => {
      res.splice(element[1], 0, element[0])
    })
    res = res.join('').toUpperCase();

    return res;
  }
  decrypt(message, key) { 
    // throw new NotImplementedError('Not implemented');
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    let idMassage = [];
    let idKey = [];
    let specialSymbols = [];
    let idRes;
    let res;
    message = message.toLowerCase();
    key = key.toLowerCase();

    const messageArray = message.split('');
    messageArray.forEach((element, index) => {
      if(this.alphabetArray.indexOf(element) === -1) {
        specialSymbols.push([element,index])
      }

      return idMassage.push(this.alphabetArray.indexOf(element))
    });
    idMassage = idMassage.filter(element => element !== -1)

    let newKey = key.repeat(idMassage.length).slice(0, idMassage.length);
    const keyArray = newKey.split('');
    keyArray.forEach(element => idKey.push(this.alphabetArray.indexOf(element))); 
    const reverseIdKey = idKey.map(el => String(el)).reverse().map(el => +el)

    if(this.state) {
      idRes = idMassage.map( (element, index) => element === - 1 ? ' ' : element > idKey[index] ? element - idKey[index] : element - idKey[index] + this.alphabetArray.length)
    } else {
      idRes = idMassage.map( (element, index) => element === - 1 ? ' ' : element > reverseIdKey[index] ? element - reverseIdKey[index] : element - reverseIdKey[index] + this.alphabetArray.length)
    }

    res = idRes.map(element => element === ' ' ? ' ' : this.alphabetArray[element] ? this.alphabetArray[element] : this.alphabetArray[element - this.alphabetArray.length]);
    specialSymbols.forEach(element => {
      res.splice(element[1], 0, element[0])
    })
    res = res.join('').toUpperCase();

    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
