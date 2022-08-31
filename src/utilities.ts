import $ from 'jquery'

export const smoothScroll = (event: any, hash: string) => {
    // event.preventDefault()

    const hashElm = document.getElementById(hash) as HTMLElement
    const navbar = document.querySelector('.navbar') as HTMLElement
    const navCollapse = document.querySelector(
        '.navbar-collapse'
    ) as HTMLElement
    const collapseHeight = navCollapse.classList.contains('show')
        ? navCollapse.offsetHeight
        : 0

    const scrollTo: number =
        hashElm.offsetTop - (navbar.offsetHeight + 10) + collapseHeight

    if (hash && hashElm) {
        $('html, body').animate({ scrollTop: scrollTo }, 800, 'easeInOutExpo')
    }
}
