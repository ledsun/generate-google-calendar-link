var assert = require('power-assert'),
  generateLink = require('./index')

describe('generate google calendar link', function() {
  it('return anchor dom', function() {
    var link = generateLink({})

    assert.equal(link.className, 'google-calendar-link')
    assert.equal(link.nodeName, 'a')
    assert.equal(link.href, 'http://www.google.com/calendar/event?action=TEMPLATE')
    assert.equal(link.target, '_blank')
  })
})
