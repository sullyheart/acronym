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