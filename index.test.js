const codewars = require('./index');

//filter for friends with four-letter name
test("Filters for four-letter-named friends: Ryan and Matt", () => {
    expect(codewars.friend(["Jimmy", "Ryan", "Matt"])).toEqual(["Ryan", "Matt"]);
  });

test("Filters for Love, 4hft, Liam, Estelle", () => {
    expect(codewars.friend(["Love", "4hft", "Liam", "Estelle", "Bell"]))
    .toEqual(["Love", "4hft", "Liam", "Bell"]);
});

test("Check function throws TypeError", () => {
    expect(codewars.friend).toThrow(TypeError);
})

//check first argument is divisible by the two other arguments
test("3 is divisible by 1 and 3 should be true", () => {
    expect(codewars.isDivisible(3, 1, 3)).toBe(true);
})

test("25 is not divisible by 2 and 2.5", () => {
    expect(codewars.isDivisible(25, 2, 2.5)).toBe(false);
})

//return all numbers divisible by divisor
test(`"[1, 2, 3, 4, 5, 6], divisible by 2" should return [2, 4, 6]`, () => {
    expect(codewars.divisibleBy([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6]);
})

test(`"[67, 1, 15, 4, 5, 6], divisible by 3" should return [15, 6]`, () => {
    expect(codewars.divisibleBy([67, 1, 15, 4, 5, 6], 3)).toEqual([15, 6]);
})