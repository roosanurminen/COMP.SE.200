import get from "../src/get.js"
import { assert } from "chai";

describe("Positive testing for get.js", () => {

    it("Should retrieve value for existing simple key", () => {
        assert.equal(get({"a": 1, "b": 2}, "a"), 1);
    })

    it("Should retrieve value for existing nested key", () => {
        assert.equal(get({"a": {"b": {"c": 3}}}, "a.b.c"), 3);
    });

    it("Should use the default value for non-existing simple key", () => {
        assert.equal(get({"a": 1, "b": 2}, "c", 10), 10);
    });

    it("Should use the default value for non-existing nested key", () => {
        assert.equal(get({"a": {"b": {"c": 3}}}, "a.b.d", 20), 20);
    });

    it("Should accept an array that contains the key path", () => {
        assert.equal(get({"a": {"b": {"c": 3}}}, ["a", "b", "c"]), 3);
    });

});

describe("Negative testing for get.js", () => {
    
    // Consistent with JS behavior
    it("Should return undefined for non-existing simple key", () => {
        assert.isUndefined(get({"a": 1, "b": 2}, "c"));
    })

    it("Should throw error when collection is null", () => {
        assert.throws(() => get(null, "a"), Error);
    })

    it("Should throw error when collection is undefined", () => {
        assert.throws(() => get(undefined, "a"), Error);
    })

    it("Should throw error when key is null", () => {
        assert.throws(() => get({"a": 1, "b": 2}, null), Error);
    })

    it("Should throw error when key is undefined", () => {
        assert.throws(() => get({"a": 1, "b": 2}, undefined), Error);
    })

    it("Should throw error when the path array is empty", () => {
        assert.throws(() => get({"a": 1, "b": 2}, []), Error);
    });

    it("Should throw error when the path is an empty string", () => {
        assert.throws(() => get({"a": 1, "b": 2}, ""), Error);
    });


});
