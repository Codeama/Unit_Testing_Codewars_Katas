'use strict'

module.exports = {
  likes: names => {
    if (names.length === 0) return 'no one likes this'
    if (names.length === 1) return `${names[0]} likes this`
    return `${names[0]} and ${names[1]} like this`
  }
}
