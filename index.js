const h = require('hyperscript')
const generateUrl = require('generate-google-calendar-url')

module.exports = (opt) => {
    return h('a.google-calendar-link', {
        href: generateUrl(opt),
        target: '_blank'
    })
}
