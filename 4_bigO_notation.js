// GOOD CASE ---> TIME Complexity - LINIER === O(n)
function summation(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}
console.log(summation(4)); // 10

/* ----------- THE BEST CASE ---> ALTRENATIVE - CONSTANT === O(1) ------- */
function summation_2(n) {
	return (n * (n + 1)) / 2;
}

console.log(summation_2(4)); // 10
