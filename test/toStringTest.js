import { assert } from "chai";
import toString from "../src/toString.js"

describe("Positive testing for toString.js", () => {

    // Null, undefined
    it("Should return empty string for null", () => {
        assert.equal(toString(null), "");
    });
    it("Should return empty string for undefined", () => {
        assert.equal(toString(undefined), "");
    });

    // Numbers
    it("Should return positive integer as string", () => {
        assert.equal(toString(4), "4");
    });
    it("Should preserve the sign for '-0'", () => {
        assert.equal(toString(-0), "-0");
    });
    it("Should return positive decimal as string", () => {
        assert.equal(toString(0.1), "0.1");
    });
    it("Should preserve the sign for '-4.1'", () => {
        assert.equal(toString(-4.1), "-4.1");
    });

    // Arrays
    it("Should return array as string", () => {
        assert.equal(toString([1,2,3]), "1,2,3");
    });
    it("Should return empty array as empty string", () => {
        assert.equal(toString([]), "");
    });
    it("Should work with nested arrays ", () => {
        const arr = [[1,2], [3,4]]
        assert.equal(toString(arr), "1,2,3,4");
    });
    it("Should work with nested arrays with null values in it ", () => {
        const arr = [[1, null], [3, 4]]
        assert.equal(toString(arr), "1,,3,4");
    });

    // Strings
    it("Should return string as string", () => {
        assert.equal(toString("5"), "5");
    });

    // Symbols
    it("Should return symbol as string", () => {
        const symb = Symbol("x")
        assert.equal(toString(symb), "Symbol(x)");
    });

    // Booleans
    it("Should return boolean as string", () => {
        assert.equal(toString(true), "true");
    });
    it("Should return boolean as string", () => {
        assert.equal(toString(false), "false");
    });

    // Maps, Objects, Sets
    it("Should work with sets ", () => {
        assert.equal(toString(new Set([1,2])), "[object Set]");
    });
    it("Should work with maps ", () => {
        assert.equal(toString(new Map([[1, 2]])), "[object Map]");
    });
    it("Should work with objects ", () => {
        assert.equal(toString({'a':1}), "[object Object]");
    });

    // NaN, infinity    
    it("Should return NaN as string ", () => {
        assert.equal(toString(NaN), "NaN");
    });
    it("Should return Infinity as string ", () => {
        assert.equal(toString(Infinity), "Infinity");
    });
    it("Should return -Infinity as string ", () => {
        assert.equal(toString(-Infinity), "-Infinity");
    });

});