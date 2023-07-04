import { add } from "./myLib.mjs";

//old way of testing

import assert from 'assert';

console.log('add()\nShould add two numbers');
try {
    assert.strictEqual(add(1, 2), 3);
    console.log('SUCCESS');

} catch (error) {
    console.log('FAILED');
    console.log(error);
}