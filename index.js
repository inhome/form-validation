"use strict";

function required(value) { return typeof value === "string" && value.trim().length > 0; }

function integerInRange(value, minimum, maximum) {
  return Number.isInteger(value) && value >= minimum && value <= maximum;
}

module.exports = { required: required, integerInRange: integerInRange };
