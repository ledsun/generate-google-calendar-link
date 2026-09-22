import assert from 'node:assert/strict'
import generateLink from './index.js'

describe('generate google calendar link', () => {
  it('return anchor dom', () => {
    const link = generateLink({})

    assert.equal(link.className, 'google-calendar-link')
    assert.equal(link.nodeName.toLowerCase(), 'a')
    assert.equal(link.href, 'http://www.google.com/calendar/event?action=TEMPLATE')
    assert.equal(link.target, '_blank')
  })

  it('generates a timed event with encoded details', () => {
    const link = generateLink({
      start: new Date('2026-09-22T10:00:00+09:00'),
      end: new Date('2026-09-22T11:00:00+09:00'),
      title: '会議 & planning',
      location: '東京',
      details: 'https://example.com/?a=1&b=2'
    })
    const params = new URL(link.href).searchParams

    assert.equal(params.get('dates'), '20260922T010000Z/20260922T020000Z')
    assert.equal(params.get('text'), '会議 & planning')
    assert.equal(params.get('location'), '東京')
    assert.equal(params.get('details'), 'https://example.com/?a=1&b=2')
  })

  it('generates an all-day event across a year boundary', () => {
    const link = generateLink({ date: '2026/12/31' })

    assert.equal(new URL(link.href).searchParams.get('dates'), '20261231/20270101')
  })
})
