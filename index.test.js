const { test } = require('@jest/globals')
const acronymOfWords = require('./index')

it('should make an acronym out of a string', () => {
    const words = acronymOfWords("United Nations Organisations")
    expect(words).toEqual("UNO")
})

it('should make an acronym out of a string', () => {
const words2 = acronymOfWords("African Union")
expect(words2).toEqual("AU")
})

it('should make an acronym out of a string', () => {
const words3 = acronymOfWords("Federation  International  Football Association")
expect(words3).toEqual("FIFA")
})

// it('should make an acronym out of a string', () => {
// const words4 = acronymOfWords("node package manager")
// expect(words4).toMatch(/npm/i)
// })

// it('should make an acronym out of a string', () => {
// const words5 = acronymOfWords("Personal identification Number")
// expect(words5).toMatch(/pin/i)
// })

// it('should make an acronym out of a string', () => {
// const words6 = acronymOfWords("federal bureau investigation")
// expect(words6).toMatch(/FBI/i)
// })