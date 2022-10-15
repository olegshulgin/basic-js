const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const parseDNS = (dns) => {
  const res = [dns];
  const iter = (str) => {
    const [first, ...rest] = str.split('.');
    if(rest.length === 0) return;
    const restStr = rest.join('.');
    res.push(restStr);
    return iter(restStr);
  }
  iter(dns);
  return res;
};

function getDNSStats(domains) {
  const  names = domains.reduce((acc, domain) => {
    const parsed = parseDNS(domain);
    return [...acc, ...parsed];
  }, []);

  const count = names.reduce((acc, n) => {
  const c = acc[n] ? acc[n] + 1 : 1;
  return { ...acc,  [n]: c };
  }, {});
  const processed = Object.entries(count).map(([n, c]) => {
    const newN = `.${n.split('.').reverse().join('.')}`;
    return [newN, c];
  })
  return Object.fromEntries(processed);
}

module.exports = {
  getDNSStats
};
