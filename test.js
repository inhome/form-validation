"use strict";
var assert = require("assert");
var lib = require("./index");

assert.strictEqual(lib.required("hello"), true);
assert.strictEqual(lib.required("  "), false);
assert.strictEqual(lib.required(null), false);

assert.strictEqual(lib.integerInRange(1, 1, 5), true);
assert.strictEqual(lib.integerInRange(5, 1, 5), true);
assert.strictEqual(lib.integerInRange(1.5, 1, 5), false);

assert.deepStrictEqual(lib.changedKeys({ a: 1 }, { a: 2, b: 3 }), ["a", "b"]);
assert.deepStrictEqual(lib.changedKeys({ a: 1 }, {}), ["a"]);

assert.strictEqual(lib.validateTitle(" ok ", 2), null);
assert.strictEqual(lib.validateTitle("", 2), "Title is required");
assert.strictEqual(lib.validateTitle("long", 2), "Title is too long");

