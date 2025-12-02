import { assert } from "chai";
import eq from "../src/eq.js"

describe("Positive testing for eq.js", () => {
    // Objects
    it("It should be false if two different objects have same contents", () =>{
        const object1 = {'a': 1};
        const object2 = {'a': 1};
        assert.equal(eq(object1, object2), false);
    })
    it("It should be true if object is compared to itself", () =>{
        const object = {};
        assert.equal(eq(object, object), true);
    })

    // Strings
    it("It should be true for equal strings", () =>{
        const str1 = "a";
        const str2 = "a"
        assert.equal(eq(str1, str2), true);
    })
    it("It should be false for different strings", () =>{
        const str1 = "a";
        const str2 = "b"
        assert.equal(eq(str1, str2), false);
    })

    // Numbers
    it("It should be true if for equal integers", () =>{
        const int1 = 1;
        const int2 = 1;
        assert.equal(eq(int1, int2), true);
    })
    it("It should be false for different integers", () =>{
        const int1 = 1;
        const int2 = 4;
        assert.equal(eq(int1, int2), false);
    })
    it("It should be false for +1 and -1", () =>{
        const int1 = 1;
        const int2 = -1;
        assert.equal(eq(int1, int2), false);
    })
    it("It should be true for -0 and +0", () =>{
        const int1 = -0;
        const int2 = 0;
        assert.equal(eq(int1, int2), true);
    })
    it("It should be true for equal decimals", () =>{
        const deci1 = 1.1;
        const deci2 = 1.1;
        assert.equal(eq(deci1, deci2), true);
    })
    it("It should be false for different decimals", () =>{
        const deci1 = 1.1;
        const deci2 = 2.1;
        assert.equal(eq(deci1, deci2), false);
    })
    it("It should be false when numbers are different", () =>{
        const int1 = 1;
        const deci1 = 2.3;
        assert.equal(eq(int1, deci1), false);
    });

    // NaN, undefined, null
    it("It should be true when comparing NaN to NaN", () =>{
        const val1 = NaN;
        const val2 = NaN;
        assert.equal(eq(val1, val2), true);
    })
    it("It should be true when comparing undefined to undefined", () =>{
        const val1 = undefined
        const val2 = undefined
        assert.equal(eq(val1, val2), true);
    })
    it("It should be true when comparing null to null", () =>{
        const val1 = null
        const val2 = null
        assert.equal(eq(val1, val2), true);
    })

    // Arrays
    it("It should be true if array is compared to itself", () =>{
        const arr = []
        assert.equal(eq(arr, arr), true);
    })
    it("It should be false if two different arrays are compared", () =>{
        const arr1 = [1,2,3,4]
        const arr2 = [1,2,3]
        assert.equal(eq(arr1, arr2), false);
    })

    // Classes
    it("It should be true if class is compared to itself", () =>{
        class A {}
        assert.equal(eq(A, A), true);
    })
    it("It should be false if two different classes are compared", () =>{
        class A {
            constructor(value) {
                this.value = value;
            }
        }
        class B {
            constructor(value) {
                this.value = value;
            }
        }
        assert.equal(eq(A, B), false);
    })

    // Booleans
    it("It should be true when comparing true to true", () =>{
        const bool1 = true
        const bool2 = true
        assert.equal(eq(bool1, bool2), true);
    })
    it("It should be true when comparing false to false", () =>{
        const bool1 = false
        const bool2 = false
        assert.equal(eq(bool1, bool2), true);
    })
    it("It should be false when comparing false to true", () =>{
        const bool1 = true
        const bool2 = false
        assert.equal(eq(bool1, bool2), false);
    })

    // Symbols
    it("It should be false when comparing different symbols", () =>{
        const symb1 = Symbol('fool')
        const symb2 = Symbol('fool')
        assert.equal(eq(symb1, symb2), false);
    })
    it("It should be true when comparing symbol to itself", () =>{
        const symb = Symbol()
        assert.equal(eq(symb, symb), true);
    })


    it("It should be false when comparing string to int with same content", () =>{
        const str1 = "1";
        const int1 = 1;
        assert.equal(eq(str1, int1), false);
    })

    it("It should be false when object or list is compared to other types", () =>{
        const object = { 'a': 1 }
        const list = [1,2,3];
        assert.equal(eq(object, list), false);
    })

    it("It should be false when class or undefined is compared to other types", () =>{
        class A {};
        const val = undefined;
        assert.equal(eq(A, val), false);
    })

    it("It should be false when NaN or null is compared to other types", () =>{
        const val1 = NaN;
        const val2 = null;
        assert.equal(eq(val1, val2), false);
    })

    it("It should be false when boolean or symbol is compared to other types", () =>{
        const val1 = true;
        const val2 = Symbol('fool');
        assert.equal(eq(val1, val2), false);
    })

});

