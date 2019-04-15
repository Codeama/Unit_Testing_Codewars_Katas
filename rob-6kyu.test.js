'use strict'

const { likes } = require('./rob-6kyu')

describe('likes function', () => {
  it('should say "no one" for an empty array', () => {
    expect(likes([])).toEqual('no one likes this')
  })

  it('should state the name for one like', () => {
    expect(likes(['Peter'])).toEqual('Peter likes this')
  })

  it('should state the name for one like', () => {
    expect(likes(['Paul'])).toEqual('Paul likes this')
  })

  it.skip('should', () => {})
  it.skip('should', () => {})
  it.skip('should', () => {})

  // likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
  // likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
  // likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

  // likes ["Alex", "Jacob", "Mark", "Max", "Foo"] // must be "Alex, Jacob and 3 others like this"
  // likes ["Alex", "Jacob", "Mark", "Max", "Foo", "Bar"] // must be "Alex, Jacob and 4 others like this"
  // likes ["Alex", "Jacob", "Mark", "Max", "Foo", "Bar", "Baz"] // must be "Alex, Jacob and 5 others like this"
})
