module.exports = function reverse (n) {
  let sN = n.toString().replace('-','');
  let res = '';
  for(let i = sN.length - 1; i >= 0; i--) res += sN[i];
  return res;
}
