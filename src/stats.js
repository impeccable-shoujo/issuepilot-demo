/** Basic statistics helpers. */

/**
 * Arithmetic mean of a list of numbers.
 * Returns 0 for an empty list.
 */
function average(numbers) {
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((total, value) => total + value, 0);
	return sum / numbers.length;
}

/** Largest value, or undefined for an empty list. */
function max(numbers) {
	return numbers.reduce((best, value) => (value > best ? value : best), -Infinity);
}

module.exports = { average, max };
