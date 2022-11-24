function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.sort(function (a, b) {
    return a - b;
  });
  let sum = sorted[0] + sorted[1];
  return sum;
}

const test = [19, 5, 42, 2, 77];
console.log(sumTwoSmallestNumbers(test));
