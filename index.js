// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// Note: keep the original order of the names in the output.
codewars = {
    friend: (friends) => {
        if(!Array.isArray(friends)){
            throw new TypeError('input is not an array!');
        }
        return friends.filter(friend => friend.length === 4)
    },

    isDivisible: (n, x, y) => {
        return n % x === 0 && n % y === 0;
    },

    divisibleBy: (numbers, divisor) => {
        return numbers.filter(number => number % divisor === 0);
    }


}

  module.exports = codewars;