import { assert } from "chai";
import defaultToAny from "../src/defaultToAny.js"


    describe("Positive test cases for defaultToAny.js", () => {

        it("Should return the first value when it is not NaN, null, or undefined", () => {
            assert.equal(defaultToAny(1, 10, 20), 1);
        });

        it("Should return the first non-NaN, non-null, or non-undefined default value value is undefined", () => {
            assert.equal(defaultToAny(undefined, 10, 20), 10);
        });

        it("Should return the first non-NaN, non-null, or non-undefined default value when value is NaN and there are valid defaults", () => {
            assert.equal(defaultToAny(NaN, null, 20), 20);
        });

        it("Should return the first non-NaN, non-null, or non-undefined default value when value is null and there are valid defaults", () => {
            assert.equal(defaultToAny(null, NaN, 30), 30);
        });

        it("Should return the first non-Nan, non-null or non-undefined default value when value is undefined and there are valid defaults", () => {
            assert.equal(defaultToAny(undefined, NaN, null, 50), 50);
        });


        it("Should return the last default value when the value is undefined and any of the default values are not valid", () => {
            assert.isNaN(defaultToAny(undefined, null, NaN));
        });

        it("Should return the last default value when the value is NaN and any of the default values are not valid", () => {
            assert.isNull(defaultToAny(NaN, undefined, null));
        });

        it("Should return the last default value when the value is null and any of the default values are not valid", () => {
            assert.isUndefined(defaultToAny(null, NaN, undefined));
        });

    });


