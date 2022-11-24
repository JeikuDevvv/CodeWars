function descendingOrder(n) {
  let digits = n.toString().split('');
  let realDigits = digits.map(Number);
  realDigits.sort();
  realDigits.reverse();
  return parseInt(realDigits.join(''));
}

console.log(descendingOrder(1201));
