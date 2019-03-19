const codewars = require("./index");

//filter for friends with four-letter name
test("Filters for four-letter-named friends: Ryan and Matt", () => {
  expect(codewars.friend(["Jimmy", "Ryan", "Matt"])).toEqual(["Ryan", "Matt"]);
});

test("Filters for Love, 4hft, Liam, Estelle", () => {
  expect(codewars.friend(["Love", "4hft", "Liam", "Estelle", "Bell"])).toEqual([
    "Love",
    "4hft",
    "Liam",
    "Bell"
  ]);
});

test("Check function throws TypeError", () => {
  expect(codewars.friend).toThrow(TypeError);
});

//check first argument is divisible by the two other arguments
test("3 is divisible by 1 and 3 should be true", () => {
  expect(codewars.isDivisible(3, 1, 3)).toBe(true);
});

test("25 is not divisible by 2 and 2.5", () => {
  expect(codewars.isDivisible(25, 2, 2.5)).toBe(false);
});

//return all numbers divisible by divisor
test(`"[1, 2, 3, 4, 5, 6], divisible by 2" should return [2, 4, 6]`, () => {
  expect(codewars.divisibleBy([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6]);
});

test(`"[67, 1, 15, 4, 5, 6], divisible by 3" should return [15, 6]`, () => {
  expect(codewars.divisibleBy([67, 1, 15, 4, 5, 6], 3)).toEqual([15, 6]);
});

//find the opposite value
test("opposite value of 1 shoulb be -1", () => {
  expect(codewars.opposite(1)).toBe(-1);
});

test("opposite value of -34 should be 34", () => {
  expect(codewars.opposite(-34)).toBe(34);
});

test("check method throws error NaN", () => {
  expect(codewars.opposite).toThrow(Error);
});

//check if function is defined
test("check is isToday is defined", () => {
  expect(codewars.isToday).toBeDefined();
});

test("check if date entered is today", () => {
  const newDate = new Date();
  expect(codewars.isToday(newDate.getDate())).toBe(true);
});

test("check if date entered is yesterday", () => {
  const newDate = new Date();
  const yesterday = newDate.getDate() - 1;
  expect(codewars.isToday(yesterday)).toBe(false);
});

//sum a mix of data(types) in an array
test("check sumMix(x) function is defined", () => {
  expect(codewars.sumMix).toBeDefined();
});

test(`sum of [9, 3, '7', '3'] should equals 22`, () => {
  expect(codewars.sumMix([9, 3, "7", "3"])).toBe(22);
});

test(`sum of ['5', '0', 9, 3, 2, 1, '9', 6, 7] should equals 42`, () => {
  expect(codewars.sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])).toBe(42);
});

test(`sum of ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] should equals 41`, () => {
  expect(codewars.sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])).toBe(41);
});

//define a helloWorld function
test("check function helloWorld is defined", () => {
  expect(codewars.helloWorld).toBeDefined();
});

//isOpposite
test("isOpposite must be defined", () => {
  expect(codewars.isOpposite).toBeDefined();
});
