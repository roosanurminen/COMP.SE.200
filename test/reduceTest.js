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

    // This functions as the oracle because the behaviour is based on Lodash
    // https://github.com/lodash/lodash/blob/3.10.1/lodash.js#L6841
    it("Should return undefined when empty array is used without any accumulator", () => {
        const result = reduce([], (acc, curr, key) => acc + curr);
        assert.equal(result, undefined);
    });

    it("Should return the initial accumulator when non-array/object is used as collection and accumulator is provided", () => {
        const result = reduce(42, (acc, curr, key) => acc + curr, 10);
        assert.equal(result, 10);
    });

    it("Should return undefined when non-array/object is used as collection and no accumulator is provided", () => {
        const result = reduce(42, (acc, curr, key) => acc + curr);
        assert.equal(result, undefined);
    });

    it("Should return undefined when trying to use a null array", () => {
       const result = reduce(null, (acc, curr, key) => acc + curr);
        assert.equal(result, undefined);
    })

    it("Should return undefined when trying to use undefined array", () =>{
        const result = reduce(undefined, (acc, curr, key) => acc + curr);
        assert.equal(result, undefined);
    })

    it("Should return undefined when a non-function is used as iteratee", () =>{
        const array = [1, 2, 3];
        const result = reduce(array, null, 0);
        assert.equal(result, undefined);
    });

    it("Should return joined string when array contains undefined values and string values and no initial accumulator is provided", () =>{
        const array = ["test1", "test2", undefined];
        const result = reduce(array, (acc, curr, key) => acc + curr);
        assert.equal(result, "test1test2undefined");
    });

    it("Should return NaN when array contains undefined values and numeric values and no initial accumulator is provided", () =>{
        const array = [1, 2, undefined];
        const result = reduce(array, (acc, curr, key) => acc + curr);
        assert.isNaN(result);
    });

});