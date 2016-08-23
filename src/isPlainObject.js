// @flow

import {isObject} from "./isObject";
import {ARGUMENTS_TO_STRING} from "./isArguments";

const OBJECT_PROTOTYPE = Object.getPrototypeOf(new Object());
/**
 * Returns true if {@link obj} is a plain object, if not false.
 * The jsz.isObject function returns true if an object is a plain object,
 * false if it is not.
 * @param {*} obj
 */
function isPlainObject(obj: any): boolean {
  return isObject(obj)
    && Object.getPrototypeOf(obj) === OBJECT_PROTOTYPE
    && Object.prototype.toString.call(obj) !== ARGUMENTS_TO_STRING;
}

export {isPlainObject}
