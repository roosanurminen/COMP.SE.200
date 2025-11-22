import { assert } from "chai";
import add from "../src/add.js"

describe("Positive testing for add.js", () => {

    it("It should sum two positive integers correctly", () =>{

        const first = 6;
        const second = 4;

        assert.equal(add(first, second), 10);

    })


});