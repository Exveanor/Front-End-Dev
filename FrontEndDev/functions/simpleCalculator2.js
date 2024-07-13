function calculate(x, y, operator) {
  const operations = {
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
  };

  console.log(operations[operator](x,y));
}

calculate(5, 5, "multiply");
calculate(40, 8, "divide");
calculate(12, 19, "add");
