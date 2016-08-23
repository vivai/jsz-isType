// @flow

const ARGUMENTS_TO_STRING = "[object Arguments]";

/**
 * Returns true is {@ling obj} is an arguments object, if not false.
 * @param {obj} - The object to check.
 */
function isArguments(obj: any): boolean {
  return obj !== undefined && (obj !== null) &&
    Object.prototype.toString.call(obj) === ARGUMENTS_TO_STRING;
}

export {isArguments, ARGUMENTS_TO_STRING}
