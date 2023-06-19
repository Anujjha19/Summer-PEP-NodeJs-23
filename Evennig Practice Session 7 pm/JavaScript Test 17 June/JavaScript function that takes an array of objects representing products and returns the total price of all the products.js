function getTotalPrice(products) {
    let totalPrice = 0;
  
    for (let product of products) {
      totalPrice += product.price;
    }
  
    return totalPrice;
  }
  
  // Example usage
  const products = [
    { name: 'Apple', price: 0.5 },
    { name: 'Orange', price: 0.8 },
    { name: 'Banana', price: 0.3 }
  ];
  
  console.log(getTotalPrice(products)); // Output: 1.6
  