//@flow
"use strict";

import {test} from "tape";
import {isObject} from "../src/isType";

test("Test isObject", function(t) {

  function getArguments() { return arguments; }

  t.ok(typeof isObject === "function",
      "Function isObject is imported.");

  t.true(isObject(getArguments()),
      "Should retun true for an arguments object.");

  t.false(isObject(function() {}),
      "Should return false for a function.");

  t.false(isObject(() => {} ),
      "Should return false for an arrow function.");

  t.false(isObject([]),
      "Should return false for an array.");

  t.true(isObject({}),
      "Should return true for an object.");

  t.true(isObject(new Object()),
      "Should return true for 'new Object();'.");

  t.true(isObject(new Date()),
      "Should return true for a date object.");

  t.false(isObject(undefined),
      "Should return false for undefined.");

  t.false(isObject(null),
      "Should return false for null.");

  t.end();
});
