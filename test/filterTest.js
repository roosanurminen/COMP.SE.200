import filter from "../src/filter.js";
import { assert } from "chai";

describe("Positive test cases for filter.js", () => {


    it("Should filter out elements correctly for simple array", () => {

        const array = [1, 2, 3, 4, 5, 6];
        const excpectedOutput = [1, 2];
        const actualOutput = filter(array, (value) => value < 3);

        //https://stackoverflow.com/questions/51388975/comparing-an-array-object-to-string-using-mocha-chai
        // https://stackoverflow.com/questions/13225274/the-difference-between-assert-equal-and-assert-deepequal-in-javascript-testing-w
        assert.deepEqual(actualOutput, excpectedOutput);
    });

    it("Should leave array unchanged if all elements pass the predicate", () => {

        const array = [1, 2, 3];
        const excpectedOutput = [1, 2, 3];
        const actualOutput = filter(array, (value) => value < 4);
        assert.deepEqual(actualOutput, excpectedOutput);
    });

    it("Should return empty array if no elements pass the predicate", () => {

        const array = [4, 5, 6];
        const excpectedOutput = [];
        const actualOutput = filter(array, (value) => value < 4);

        assert.deepEqual(actualOutput, excpectedOutput);
    });

    it("Should work correctly with an empty array", () => {

        const array = [];
        const excpectedOutput = [];
        const actualOutput = filter(array, (value) => value < 4);

        assert.deepEqual(actualOutput, excpectedOutput);
    });

    it("Should filter objects based on property values", () => {

        const array = [{"name": "Pekka", "age": 25}, {"name": "Jari", "age": 30}, {"name": "Linda", "age": 22}];
        const excpectedOutput = [{"name": "Pekka", "age": 25}, {"name": "Linda", "age": 22}];
        const actualOutput = filter(array, (value) => value.age < 30);

        assert.deepEqual(actualOutput, excpectedOutput);
    });

    it("Should work correctly with object destructuring in predicate", () => {

        const array = [{"name": "Pekka", "age": 25}, {"name": "Jari", "age": 30}, {"name": "Linda", "age": 22}];
        const excpectedOutput = [{"name": "Pekka", "age": 25}, {"name": "Linda", "age": 22}];
        const actualOutput = filter(array, ({age}) => age < 30);

        assert.deepEqual(actualOutput, excpectedOutput);
    });

    it("Should work correctly when array contains a single element", () => {

        const array = [5];
        const excpectedOutput = [5];
        const actualOutput = filter(array, (value) => value > 0);

        assert.deepEqual(actualOutput, excpectedOutput);
    });

    it("Should work correctly when array contains null, undefined, and NaN values", () => {

        const array = [null, undefined, NaN, 1, 2, 3];
        const excpectedOutput = [1, 2, 3];
        const actualOutput = filter(array, (value) => value > 0);

        assert.deepEqual(actualOutput, excpectedOutput);
    });


});


describe("Negative test cases for filter.js", () => {

    it("Should throw an error when the predicate is not a function", () => {
        assert.throws(() => filter([1, 2, 3], 111), Error);
    });

    it("Should throw an error when the iterable is undefined", () => {
        const array = undefined;
        assert.throws(() => filter(array, (value) => value > 0), Error);
    });

    it("Should throw an error when the iterable is null", () => {
        const array = null;
        assert.throws(() => filter(array, (value) => value > 0), Error);
    });


});