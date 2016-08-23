// @flow

/**
 * Returns true if {@link obj} is a function, if not false.
 * @param {*} obj
 */
function isFunction(obj: any): boolean {
  return typeof obj === "function";
}

export {isFunction}
