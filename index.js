import h from 'hyperscript'
import generateUrl from 'generate-google-calendar-url'

export default (opt) => {
    return h('a.google-calendar-link', {
        href: generateUrl(opt),
        target: '_blank'
    })
}
