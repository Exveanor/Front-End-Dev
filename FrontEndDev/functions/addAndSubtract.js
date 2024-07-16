function addAndSubtract(first, second, last) {
  let sum = (first, second) => first + second;
  let result = sum(first, second);
  let subtract = (result, last) => result - last;
  return subtract(result, last);
}

addAndSubtract(23, 6, 10);
