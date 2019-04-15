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

  it('should state both names for two likes', () => {
    expect(likes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this')
  })

  it('should state both names for two likes', () => {
    expect(likes(['Foo', 'Bar'])).toEqual('Foo and Bar like this')
  })

  it('should state all three names for three like', () => {
    expect(likes(['Max', 'John', 'Mark'])).toEqual(
      'Max, John and Mark like this'
    )
  })

  it('should state all three names for three like', () => {
    expect(likes(['Foo', 'Bar', 'Baz'])).toEqual('Foo, Bar and Baz like this')
  })

  it('should state the first two names and remainder count for four likes', () => {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual(
      'Alex, Jacob and 2 others like this'
    )
  })

  it('should state the first two names and remainder count for four likes', () => {
    expect(likes(['Foo', 'Bar', 'Baz', 'Qux'])).toEqual(
      'Foo, Bar and 2 others like this'
    )
  })

  it('should state the first two names and remainder count for five likes', () => {
    expect(likes(['Foo', 'Bar', 'Baz', 'Qux', 'Quux'])).toEqual(
      'Foo, Bar and 3 others like this'
    )
  })
  it('should state the first two names and remainder count for six likes', () => {
    expect(likes(['Foo', 'Bar', 'Baz', 'Qux', 'Quux', 'Quuz'])).toEqual(
      'Foo, Bar and 4 others like this'
    )
  })
  it('should state the first two names and remainder count for seven likes', () => {
    expect(
      likes(['Foo', 'Bar', 'Baz', 'Qux', 'Quux', 'Quuz', 'Corge'])
    ).toEqual('Foo, Bar and 5 others like this')
  })
})
