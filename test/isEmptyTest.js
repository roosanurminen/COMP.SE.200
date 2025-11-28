import { assert } from "chai";
import isEmpty from "../src/isEmpty.js"

describe("Positive test cases for isEmpty.js", () => {

    // Arrays
    it("Should return true if array is empty", () => {
        assert.equal(isEmpty([]), true);
    });
    it("Should return false if array isn't empty", () => {
        assert.equal(isEmpty([1, 2, 3]), false);
    });

    // null, undefined, NaN
    it("Should return true if value is null", () => {
        assert.equal(isEmpty(null), true);
    });
    it("Should return true if value is undefined", () => {
        assert.equal(isEmpty(undefined), true);
    });
    it("Should return true if value is NaN", () => {
        assert.equal(isEmpty(NaN), true);
    });

    // Objects
    it("Should return true if object is empty", () => {
        assert.equal(isEmpty({}), true);
    });
    it("Should return false if object is not empty", () => {
        assert.equal(isEmpty({'a': 1}), false);
    });

    // Prototype
    it("Should return true if prototype is empty", () => {
        function test() {}
        assert.equal(isEmpty(test.prototype), true)
    });
    it("Should return false if prototype is not empty", () => {
        function test() {}
        test.prototype = 3
        assert.equal(isEmpty(test.prototype), false)
    })

    // Strings
    it("Should return true if string is empty", () => {
        assert.equal(isEmpty(""), true);
    });
    it("Should return false if string is not empty", () => {
        assert.equal(isEmpty("abc"), false);
    });

    // Booleans
    it("Should return true if value is true", () => {
        assert.equal(isEmpty(true), true);
    });
    it("Should return true if value is false", () => {
        assert.equal(isEmpty(false), true);
    });

    // Numbers
    it("Should return true for positive integer", () => {
        assert.equal(isEmpty(1), true);
    });
    it("Should return true for negative integer", () => {
        assert.equal(isEmpty(-1), true);
    });
    it("Should return true for positive decimal", () => {
        assert.equal(isEmpty(1.1), true);
    });
    it("Should return true for negative decimal", () => {
        assert.equal(isEmpty(-1.1), true);
    });

    // Maps
    it("Should return true if maps is empty", () => {
        const map = new Map()
        assert.equal(isEmpty(map), true);
    });
    it("Should return false if map is not empty", () => {
        const map = new Map([["A", 1], ["B", 2]]);
        assert.equal(isEmpty(map), false);
    });

    // Sets
    it("Should return true if set is empty", () => {
        const set = new Set();
        assert.equal(isEmpty(set), true);
    });
    it("Should return false if set is not empty", () => {
        const set = new Set(["A", "B"]);
        assert.equal(isEmpty(set), false);
    });

    // Buffers
    it("Should return true if Buffer is empty", () => {
        const buffer = Buffer.alloc(0);
        assert.equal(isEmpty(buffer), true);
    });
    it("Should return false if Buffer is not empty", () => {
        const buffer = Buffer.alloc(10)
        assert.equal(isEmpty(buffer), false);
    });

    // Arguments
    it("Should return true if arguments object is empty", () => {
        function test() {
            return isEmpty(arguments)
        }
        assert.equal(test(), true);
    });
    it("Should return false if arguments objcet is not empty", () => {
        function test() {
            return isEmpty(arguments)
        }
        assert.equal(test(1,2), false);
    });
});