const codewars = require('./6kyu');

describe(`function must take in input array, containing the names of people 
who like an item. It must return the display text with the name of people who like the item.`, 
()=>{
    it.skip(`must take in an input array`, () => {
        expect(codewars.likes([2, 3])).toEqual(`array elements must be of type string!`);
    });

    it.skip(`array elements input must be a type of string`, ()=> {
        expect(codewars.likes("3")).toEqual(`input must be an array!`);
    })

    it(`should return a string with the names in the array`, ()=> {
        expect(codewars.likes([])).toEqual(`no one likes this`);
    })

    it(`should return "Peter likes this`, ()=> {
        expect(codewars.likes(["Peter"])).toEqual(`Peter likes this`);
    })

    it(`should return "Jacob and Alex" like this`, ()=> {
        expect(codewars.likes(["Jacob", "Alex"])).toEqual(`Jacob and Alex like this`)
    })

    it(`should return "Max, John and Mark like this"`, ()=> {
        expect(codewars.likes(["Max", "John", "Mark"])).toEqual(`Max, John and Mark like this`)
    })

    it(`should return "Alex, Jacob and others like this"`, ()=> {
        expect(codewars.likes(["Alex", "Jacob", "Mark", "Max"])).toEqual(`Alex, Jacob and 2 others like this`)
    })

})