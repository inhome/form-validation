"use strict";

function required(value) { return typeof value === "string" && value.trim().length > 0; }

function integerInRange(value, minimum, maximum) {
  return Number.isInteger(value) && value >= minimum && value <= maximum;
}

function changedKeys(original, current) {
  return Array.from(new Set(Object.keys(original).concat(Object.keys(current)))).filter(function (key) { return original[key] !== current[key]; });
}

function validateTitle(value, maximum) {
  if (!required(value)) return "Title is required";
  if (Array.from(value.trim()).length > maximum) return "Title is too long";
  return null;
}

module.exports = { required: required, integerInRange: integerInRange, changedKeys: changedKeys, validateTitle: validateTitle };
