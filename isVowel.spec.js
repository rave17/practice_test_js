const isVowel = require('.');

describe('isVowel', ()=>{
    it('should return true for input "a"', ()=>{
        expect(isVowel('a')).toBe(true)
    });
    
    it('should return false for input "c"', ()=>{
        expect(isVowel('c')).toBe(false);
    });
});

