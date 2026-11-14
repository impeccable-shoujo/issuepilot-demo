const assert = require("node:assert/strict");
const { test } = require("node:test");
const { average, max } = require("../src/stats.js");

test("average of a non-empty list", () => {
	assert.equal(average([1, 2, 3]), 2);
	assert.equal(average([4]), 4);
});

test("average of an empty list is 0", () => {
	assert.equal(average([]), 0);
});

test("max of a list", () => {
	assert.equal(max([3, 9, 2]), 9);
});
