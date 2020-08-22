const assert = require('assert');
const isVowel = require('.');

const tests = [];
const test = (name, fn)=> tests.push({name, fn});

let failures = 0;

test('isVowel return true for input "a"', ()=>{
    assert.ok(isVowel('a'));
});

test('isVowel return false for input "c"', ()=>{
    assert.equal(isVowel('c'), false);
});

tests.forEach(({ name, fn })=>{
    console.log(name);
    try{
        fn();
    } catch(err){
    console.error(`Expected ${err.expected} but got ${err.actual}`);
        failures += 1;
    }
});

if(failures > 0){
    console.error('Tests failed');
    process.exit(1);
};