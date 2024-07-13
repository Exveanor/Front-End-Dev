function getOrderPrice(order, quantity) {
  const productPrices = {
    coffee: 1.5,
    water: 1,
    coke: 1.4,
    snacks: 2,
  };

  const result = (productPrices[order] * quantity).toFixed(2);
  console.log(result);
}

getOrderPrice("water", 5);
getOrderPrice("coffee", 2);
