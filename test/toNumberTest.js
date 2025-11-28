import { assert } from "chai";
import toNumber from "../src/toNumber.js"

describe("Positive testing for toNumber.js", () => {

    // Numbers
    it("Should return value itself when it's a positive integer", () => {
        assert.equal(toNumber(3), 3);
    });
    it("Should return value itself when it's a negative integer", () => {
        assert.equal(toNumber(-3), -3);
    });
    it("Should return value itself when it's a positve decimal", () => {
        assert.equal(toNumber(3.2), 3.2);
    });
    it("Should return value itself when it's a negative decimal", () => {
        assert.equal(toNumber(-3.2), -3.2);
    });
    it("Should return Number.MIN_VALUE", () => {
        assert.equal(toNumber(Number.MIN_VALUE), Number.MIN_VALUE);
    });
    it("Should return 0 when value is 0", () => {
        assert.equal(toNumber(0), 0);
    });

    // Strings
    it("Should return string as int when string value is integer", () => {
        assert.equal(toNumber("3"), 3);
    });
    it("Should return string as int when string value is negative integer", () => {
        assert.equal(toNumber("-3"), -3);
    });
    it("Should return string as float when string value is positve decimal", () => {
        assert.equal(toNumber("3.2"), 3.2);
    });
    it("Should return string as float when string value is negative decimal", () => {
        assert.equal(toNumber("-3.2"), -3.2);
    });
    it("Should return number when string contains whitespaces also", () => {
        assert.equal(toNumber("  10 "), 10);
    });
    it("Should return NaN if string is not number", () => {
        assert.isNaN(toNumber("Hi"));
    });

    // Objects, maps, sets
    it("Should return NaN if value is object", () => {
        assert.isNaN(toNumber({"a": 1}));
    });
    it("Should return NaN if value is map", () => {
        const map = new Map()
        assert.isNaN(toNumber(map));
    });
    it("Should return NaN if value is set", () => {
        const set = new Set([1, 2]);
        assert.isNaN(toNumber(set));
    });


    it("Should return primitive when valueof is primitive", () => {
        const x = new Number(1);
        assert.equal(toNumber(x), 1);
    });
    it("Should return NaN when an object's valueof is not a function", () => {
        function test() {};
        test.valueOf = 123;
        assert.isNaN(toNumber(test));
    });

    // Infinity
    it("Should return Infinity if value is Infinity", () => {
        assert.equal(toNumber(Infinity), Infinity);
    });

    // Symbol
    it("Should return NaN if value is Symbol", () => {
        assert.isNaN(toNumber(Symbol('foo')));
    });

    // Binary
    it("Should correctly parse valid binary string", () => {
        assert.equal(toNumber("0b101"), 5);
    });
    
    // Hexadecimals
    it("Should correctly parse valid hex value", () => {
        assert.equal(toNumber("0xFF"), 255);
    });
    it("Should return NaN for invalid signed hex", () => {
        assert.isNaN(toNumber("-0x10"));
    });
    
    // Octals
    it("Should correctly parse valid octal", () => {
        assert.equal(toNumber("0o10"), 8);
    });

    // These were hinted by the line coverage report of c8
    // Booleans
    it("Should convert true to 1", () => {
        assert.equal(toNumber(true), 1);
    });

    it("Should convert false to 0", () => {
        assert.equal(toNumber(false), 0);
    });

    //undefined
    it("Should return NaN when undefined", () => {
        assert.isNaN(toNumber(undefined));
    });
});