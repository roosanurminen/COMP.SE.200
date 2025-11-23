import reduce from '../src/reduce.js';
import { assert } from 'chai';


describe('Positive test cases for reduce.js', () => {

    it('Should reduce a simple array of numbers to their sum', () => {
        const array = [1, 2, 3, 4];
        assert.equal(10, reduce(array, (acc, curr, key) => acc + curr, 0));
    });

    it("Should use the first element as the initial accumulator when no initial value is provided", () => {
        const array = [1, 2, 3, 4];
        assert.equal(10, reduce(array, (acc, curr,key) => acc + curr));
    });

    it("Should return the accumulator when reducing an empty array with an initial value", () => {
        assert.equal(5, reduce([], (acc, curr, key) => acc + curr, 5));
    });

    it("Should work with array of objects", () => {
        const array = [{"name": "Pekka", "age": 25}, {"name": "Jari", "age": 30}, {"name": "Linda", "age": 22}];

        const expected = ["Pekka", "Jari", "Linda"];

        assert.deepEqual(expected, reduce(array, (acc, curr) => {
            acc.push(curr.name);
            return acc;
        }, [])
        );

    });

    it("Should work when item to iterate over is an object", () => {
        const testObject = {"buyPrice": 2, "sellPrice": 5};
        assert.equal(7, reduce(testObject, (acc, curr, key) => acc + curr, 0));
    })

});

describe("Negative test cases for reduce.js", () => {

    // For these, a combination of JS reduce and lodash reduce implementation is used as oracle
    it("Should throw error when the array is empty and no initial accumulator is provided", () => {
        const array = [];
        assert.throws(() => reduce(array, (acc, curr, key) => acc + curr), Error);
    });

    it("Should throw error when the collection is not array or object", () => {
        assert.throws(() => reduce(42, (acc, curr, key) => acc + curr, 0), Error);
    });

    it("Should throw error when the collection is null", () => {
        assert.throws(() => reduce(null, (acc, curr, key) => acc + curr, 0), Error);
    });


    it("Should throw error when the collection is undefined", () => {
        assert.throws(() => reduce(undefined, (acc, curr, key) => acc + curr, 0), Error);
    });

    it("Should throw error when reducer function is not provided", () => {
        const array = [1, 2, 3];
        assert.throws(() => reduce(array), Error);
    });

    // The error thrown here is to ensure that no erronous values are sent to the external provider
    it("Should throw error when the array contains undefined values and numeric values and no initial accumulator is provided", () => {
        const array = [1, 2, undefined];
        assert.throws(() => reduce(array, (acc, curr, key) => acc + curr), Error);
    });

});