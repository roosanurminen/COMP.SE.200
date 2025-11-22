import { assert } from "chai";
import add from "../src/add.js"

describe("Positive testing for eq.js", () => {

    it("It should sum two positive integers correctly", () =>{

        const first = 6;
        const second = 4;

        assert.equal(add(first, second), 10);

    })

    it("It should sum two negative integers correctly", () =>{

        const first = -2;
        const second = -8;

        assert.equal(add(first, second), -10);

    })

    it("It should sum positive and negative integers correctly", () =>{

        const first = -4;
        const second = 6;

        assert.equal(add(first, second), 2);

    })

});

