//@flow
"use strict";

import {test} from "tape";
import {isArray} from "../src/isType";

test("Test isArray", function(t) {

  function getArguments() { return arguments; }

  t.ok(typeof isArray === "function",
      "Function isArray is imported.");

  t.false(isArray(getArguments()),
      "Should retun false for an arguments object.");

  t.false(isArray(function() {}),
      "Should return false for a function.");

  t.false(isArray(() => {} ),
      "Should return false for an arrow function.");

  t.true(isArray([]),
      "Should return true for an array.");

  t.false(isArray({}),
      "Should return false for an object.");

  t.false(isArray(new Object()),
      "Should return false for 'new Object();'.");

  t.false(isArray(new Date()),
      "Should return false for a date object.");

  t.false(isArray(undefined),
      "Should return false for undefined.");

  t.false(isArray(null),
      "Should return false for null.");

  t.end();
});
