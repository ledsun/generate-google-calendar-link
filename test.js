const assert = require('assert')
const generateLink = require('./index')

describe('generate google calendar link', () => {
  it('return anchor dom', () => {
    const link = generateLink({})

    assert.equal(link.className, 'google-calendar-link')
    assert.equal(link.nodeName.toLowerCase(), 'a')
    assert.equal(link.href, 'http://www.google.com/calendar/event?action=TEMPLATE')
    assert.equal(link.target, '_blank')
  })
})
