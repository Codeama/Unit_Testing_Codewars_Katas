const codewars = require('./7kyu');

//Exes and Ohs
test(`"xo" should return true`, () => {
    expect(codewars.XO('xo')).toBe(true);
});

test(`"xxOo" should return true`, () => {
    expect(codewars.XO("xxOo")).toBe(true);
})

test(`"xxxm" should return false`, () => {
    expect(codewars.XO('xxxm')).toBe(false);
})

test(`"Oo" should return false`, () => {
    expect(codewars.XO('Oo')).toBe(false);
})