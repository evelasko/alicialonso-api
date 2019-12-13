/* eslint-disable functional/functional-parameters */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Normalize all arguments received into an array
 * @param {(any | any[])} arrayOrAnything the argument to normalize
 * @return {any[]} if array is provided returns a shallow copy, otherwise returns the argument into an array or an empty array if argument is null or undefined
 */
export const normalizeToArray = (...arrayOrAnything: any | any[]): any[] => arrayOrAnything
