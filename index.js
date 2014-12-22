var h = require('hyperscript'),
generateUrl = require('generate-google-calendar-url')

module.exports = function(opt) {
    var a = h('a.google-calendar-link', {
        href: generateUrl(opt),
        target: '_blank'
    })

    return a
}
