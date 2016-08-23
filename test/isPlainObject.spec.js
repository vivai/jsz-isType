//@flow
"use strict";

import {test} from "tape";
import {isPlainObject} from "../src/isType";

test("Test isPlainObject", function(t) {

  function getArguments() { return arguments; }

  t.ok(typeof isPlainObject === "function",
      "Function isPlainObject is imported.");

  t.false(isPlainObject(getArguments()),
      "Should retun false for an arguments object.");

  t.false(isPlainObject(function() {}),
      "Should return false for a function.");

  t.false(isPlainObject(() => {} ),
      "Should return false for an arrow function.");

  t.false(isPlainObject([]),
      "Should return false for an array.");

  t.true(isPlainObject({}), 
      "Should return true for an object.");

  t.true(isPlainObject(new Object()),
      "Should return true for 'new Object();'.");

  t.false(isPlainObject(new Date()),
      "Should return false for a date object.");

  t.false(isPlainObject(undefined), 
      "Should return false for undefined.");

  t.false(isPlainObject(null),
      "Should return false for null.");

  t.end();
});
