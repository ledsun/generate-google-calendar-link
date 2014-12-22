var assert = require('power-assert'),
  generateLink = require('./index')

describe('generate google calendar link', function() {
  it('return dam', function() {
    assert.equal(generateLink({
      start: new Date(2014, 10, 15, 10),
      end: new Date(2014, 10, 15, 18),
      title: 'New event',
      location: 'Some where',
      details: 'http://event.description.example.com/11234'
  }).outerHTML, '<a href="http://www.google.com/calendar/event?action=TEMPLATE&amp;text=New%20event&amp;location=Some%20where&amp;details=http%3A%2F%2Fevent.description.example.com%2F11234&amp;dates=20141115T010000Z/20141115T090000Z" target="_blank" class="google-calendar-link"></a>')
  })
})
