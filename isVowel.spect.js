const isVowel = require('.');

let failures = 0;

console.log('isVowel return true for input "a"');
if(isVowel('a') === true){
    console.log('OK');
} else {
    console.error('FAIL');
    failures += 1;
}

console.log('isVowel return false for input "c"');
if(isVowel('c') === false){
    console.log('OK');
} else {
    console.error('FAIL');
    failures += 1;
}

if(failures > 0){
    console.error('Tests failed');
    process.exit(1);
}