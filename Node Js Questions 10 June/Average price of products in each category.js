const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
];
function calculateAveragePrice(products) {
    const categoryTotals = {};
    const categoryCounts = {};

    for (let i = 0; i < products.length; i++) {
        const { price, category } = products[i];
        if (categoryTotals.hasOwnProperty(category)) {
            categoryTotals[category] += price;
            categoryCounts[category]++;
        } else {
            categoryTotals[category] = price;
            categoryCounts[category] = 1;
        }
    }
    const result = [];
    for (const category in categoryTotals) {
        const averagePrice = categoryTotals[category] / categoryCounts[category];
        if (averagePrice > 50) {
            result.push({ category, averagePrice });
        }
    }

    return result;
}
const averagePriceAbove50 = calculateAveragePrice(products);
console.log(averagePriceAbove50);

/*
[
    { category: 'Electronics', averagePrice: 60 },
    { category: 'Clothes', averagePrice: 66 }
]

*/