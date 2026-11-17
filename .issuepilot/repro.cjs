const { truncate } = require("../src/format.js");

// Text shorter than maxLength should be returned unchanged
const result = truncate("hello", 10);
if (result !== "hello") {
	console.error(`Expected "hello", got "${result}"`);
	process.exit(1);
}
console.log("OK: short text returned unchanged");
