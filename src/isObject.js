// @flow

/**
 * Returns true if {@link obj} is an object, if not false.
 *
 * @param {*} obj
 * @return {boolean}
*/
function isObject(obj: any): boolean {
  return obj !== undefined
    && obj !== null
    && typeof obj === "object"
    && !Array.isArray(obj);
}

export {isObject}
