//@flow
"use strict";

import {test} from "tape";
import {isArguments} from "../src/isType";

test("Test isArguments", function(t) {

  function getArguments() { return arguments; }

  t.ok(typeof isArguments === "function",
      "Function isArguments is imported.");

  t.true(isArguments(getArguments()),
    "Should return true for an arguments object.");

  t.false(isArguments(function() {}),
      "Should return false for function.");

  t.false(isArguments(() => {}),
      "Should return false for an arrow function.");

  t.false(isArguments([]),
      "Should return false for an array.");

  t.false(isArguments({}),
      "Should return false for an object.");

  t.false(isArguments(new Object()),
      "Should return true for 'new Object();'.");

  t.false(isArguments(new Date()), 
        "Should return false for a date object.");

  t.false(isArguments(undefined),
      "Should return false for undefined.");

  t.false(isArguments(null),
      "Should return false for null.");

  t.end();
});
