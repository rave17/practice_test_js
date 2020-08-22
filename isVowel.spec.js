const { isVowel, countVowels } = require('.');

describe('isVowel', ()=>{
    it('should return true for input "a"', ()=>{
        expect(isVowel('a')).toEqual(true)
    });
    
    it('should return false for input "c"', ()=>{
        expect(isVowel('c')).not.toBe(true);
    });
});

describe('countVowels', () => {
    it('should...', ()=>{
        expect(countVowels('abc')).toEqual({ a: 1, e: 0, i: 0, o: 0, u:0 });
    });
});