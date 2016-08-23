//@flow
"use strict";

import {test} from "tape";
import {isFunction} from "../src/isType";

test("Test isFunction", function(t) {

  function getArguments() { return arguments; }

  t.ok(typeof isFunction === "function",
      "Function isFunction is imported.");

  t.false(isFunction(getArguments()),
      "Should retun false for an arguments object.");

  t.true(isFunction(function() {}),
      "Should return true for a function.");

  t.true(isFunction(() => {} ),
      "Should return true for an arrow function.");

  t.false(isFunction([]),
      "Should return false for an array.");

  t.false(isFunction({}),
      "Should return false for an object.");

  t.false(isFunction(new Object()),
      "Should return false for 'new Object();'.");

  t.false(isFunction(new Date()),
      "Should return false for a date object.");

  t.false(isFunction(undefined),
      "Should return false for undefined.");

  t.false(isFunction(null),
      "Should return false for null.");

  t.end();
});
