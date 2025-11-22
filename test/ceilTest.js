import { assert } from "chai";
import ceil from "../src/ceil.js"

describe("TESTS BASED ON TEST PLAN", () => {
    
    describe("Positive test cases for ceil.js", () => {

        it("Should keep an integer without precisions specified unchanged", () => {
            assert.equal(ceil(6), 6)
        })

        it("Should round decimals up to nearest integer by default", () => {
            assert.equal(ceil(3.006), 4);
        });

        it("Should round decimal to correct precision when positive precision is specified", () => {
            assert.equal(ceil(6.004, 2), 6.01);
        });

        it("Should keep integer unchanged when precision is positive", () => {
            assert.equal(ceil(5, 3), 5);
        });

        it("Should round decimal to correct precision when zero precision is specified", () => {
            assert.equal(ceil(3.006, 0), 4);
        });

    });

    describe("Negative test cases for ceil.js", () => {

        it("Should throw an error when input is not a number", () => {
            assert.throws(() => ceil("not a number"), Error);
        });

        it("Should throw an error if precision is not a number", () => {
            assert.throws(() => ceil(4.3367, "not a number"), Error);
        });
    });

});

describe("NEWLY ADDED TESTS FOR ceil.js", () => {

    describe("Positive test cases for ceil.js", () => {

        it("Should round integer to correct precision when negative precision is specified", () => {
            assert.equal(ceil(6040, -2), 6100);
        });

        it("Should round decimal to correct precision when negative precision is specified", () => {
            assert.equal(ceil(6.040, -2), 100);
        });
        
    });

    describe("Negative test cases for ceil.js", () => {

        it("Should throw an error when precision is not an integer", () => {
            assert.throws(() => ceil(4.3367, 1.5), Error);
        });

    });

});
