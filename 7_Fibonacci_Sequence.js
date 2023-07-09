function fibonacci(n) {
	// Step 1
	const fib = [0, 1];

	// Step 2 for is BigO = O(n)-> Linier
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
	}

	// Step 3
	return fib;
}

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(4)); // [ 0, 1, 1, 2 ]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
