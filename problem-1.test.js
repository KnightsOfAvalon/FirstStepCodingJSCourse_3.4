const { test, expect } = require("@jest/globals");
const total_characters = require('./problem-1');

test("Returns total # of characters of string array", () => {
  expect(total_characters(["hello", "there"])).toBe(10);
  expect(total_characters(["you", "did", "it"])).toBe(8);
  expect(total_characters(["You're", "awesome!"])).toBe(14);
});