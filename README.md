# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @bwong.yh/lotide`

**Require it:**

`const _ = require('@bwong.yh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertEqual(arg1, arg2) {}`: takes two primitive data arguments and does a strict comparsion between them, then logs the assertion result in the console.

- `assertArraysEqual(arr1, arr2) {}`: similar to assertEqual, except it takes two arrays, does a strict comparsion of elements in both arrays and logs assertion result in the console.

- `assertObjectsEqual(obj1, obj2) {}`: takes two objects and does a strict comparsion of the properties in both objects and logs the assertion result in the console.

- `countLetters(str) {}`: takes a string arguement and returns the counts of each letter in the string.

- `countOnly([a, b, b], {a = true, b = false}) {}`: takes an array as first arguement and an object as second argument. Then returns the counts for the element in the array that specified in the object.

- `eqArrays(arr1, arr2) {}`: takes two arrays and compares their elements. It returns _true_ if the elements are the same, and _false_ if different. **_This is used for arrays containing the SAME data type. It will NOT work with mixed data types arrays._**

- `eqObjects(obj1, obj2) {}`: takes two objects and compares the properties in both objects. It returns _true_ if properties are the same in both objects, and _false_ if different. **_Please see eqArrays if property has an array as value._**

- `findKey(obj, callback) {}`: takes an object and a callback function and returns the first key for the truthy value that the callback returned. _Undefined_ is returned if no key is found.

- `findKeyByValue(obj, arg) {}`: takes in a value of an object and returns the first key that contains the value.

- `flatten(nestedArr) {}`: takes in an nested array and returns a "flattened" single-level array.

- `head(arr) {}`: takes an array and returns the first element of the array.

- `letterPositions(str) {}`: takes a string argument and returns the index position of each letter in the string.

- `map(arr, callback)`: takes an array and callback function and returns a new array based on the the conditions specified in the callback.

- `middle(arr) {}`: takes an array and returns the middle element of the array. If the lenght of array is even, it returns the middle two elements of the array.

- `tail(arr) {}`: takes an array and returns a new array with elements start from the first position of the original array.

- `tailUntil(arr, callback) {}`: takes an array and a callback function and returns a new array with elements collected from the original array until callback returns truthy.

- `without(arr1, arr2) {}`: takes two arrays, source array and exclusion array (elements to be removed) respectively. A new array is returned with elements from the source array that are NOT in the exclusion array.
