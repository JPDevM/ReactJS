let products = ['tv', 'tablet', 'smartphone'];

let newProducts = products.map(function (oneProduct) {
	return `${oneProduct} - Sale!`
});

console.log(products);
console.log(newProducts);

let numbers = [5, -20, 10, 15, 0, -23];

let positives = numbers.filter(function (oneNumber) {
	return oneNumber > 0;
})

console.log(positives);