"use strict";
var assert = require("assert");
var lib = require("./index");

assert.strictEqual(lib.required("hello"), true);
assert.strictEqual(lib.required("  "), false);
assert.strictEqual(lib.required(null), false);

