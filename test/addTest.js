import { assert, expect } from "chai";
import add from "../src/add.js"

describe("Positive testing for add.js", () => {

    it("It should sum two positive integers correctly", () =>{
        const augend = 6;
        const addend = 4;
        assert.equal(add(augend, addend), 10);
    })

    it("It should sum two negative integers correctly", () =>{
        const augend = -2;
        const addend = -8;
        assert.equal(add(augend, addend), -10);
    })

    it("It should sum positive and negative integers correctly", () =>{
        const augend = -4;
        const addend = 6;
        assert.equal(add(augend, addend), 2);
    })

    it("It should sum positive integer and zero addend correctly", () =>{
        const augend = 3;
        const addend = 0;
        assert.equal(add(augend, addend), 3);
    })

    it("It should sum zero augend and negative integer correctly", () =>{
        const augend = 0;
        const addend = -2;
        assert.equal(add(augend, addend), -2);
    })

    it("It should sum two positive decimals correctly", () =>{
        const augend = 2.1;
        const addend = 3.3;
        assert.equal(add(augend, addend), 5.4);
    })

    it("It should sum positve decimal and integer correctly", () =>{
        const augend = 2.1;
        const addend = 4;
        assert.equal(add(augend, addend), 6.1);
    })

});


describe("Negative testing for add.js", () => {

    it("It should throw error if augend is undefined", () =>{
        const augend = undefined;
        const addend = 2;
        expect(() => add(augend, addend)).to.throw(error)
    })

    it("It should throw error if addend is undefined", () =>{
        const augend = 3;
        const addend = undefined;
        expect(() => add(augend, addend)).to.throw(error)
    })

    it("It should throw error if augend is string", () =>{
        const augend = "6";
        const addend = 4;
        expect(() => add(augend, addend)).to.throw(error);
    })

    it("It should throw error if addend is string", () =>{
        const augend = 6;
        const addend = "4";
        expect(() => add(augend, addend)).to.throw(error);
    })
})

