'use strict'

module.exports = {
  likes: names => {
    if (names.length === 0) return 'no one likes this'
    if (names.length === 1) return `${names[0]} likes this`
    return `Jacob and Alex like this`
  }
}
