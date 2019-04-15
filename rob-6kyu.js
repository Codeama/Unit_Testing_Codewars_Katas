'use strict'

module.exports = {
  likes: names => {
    if (names.length === 0) return 'no one likes this'
    return `${names[0]} likes this`
  }
}
