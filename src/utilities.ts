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

export const parseTimeframe = (timeframe: string): number => {
    // Handle year-only format (e.g., "2019")
    if (/^\d{4}$/.test(timeframe)) {
        return new Date(parseInt(timeframe), 0, 1).getTime()
    }

    // Handle month-year format (e.g., "September 2022")
    const monthYearMatch = timeframe.match(/^([A-Za-z]+) (\d{4})$/)
    if (monthYearMatch) {
        const month = monthYearMatch[1]
        const year = parseInt(monthYearMatch[2])
        const monthIndex = new Date(`${month} 1, 2000`).getMonth()
        return new Date(year, monthIndex, 1).getTime()
    }

    // Handle month-day-year formats (with or without comma)
    // e.g., "October 11, 2022" or "November 11 2024"
    const fullDateMatch = timeframe.match(/^([A-Za-z]+) (\d{1,2}),? (\d{4})$/)
    if (fullDateMatch) {
        const month = fullDateMatch[1]
        const day = parseInt(fullDateMatch[2])
        const year = parseInt(fullDateMatch[3])
        const monthIndex = new Date(`${month} 1, 2000`).getMonth()
        return new Date(year, monthIndex, day).getTime()
    }

    // Fallback to browser's Date parsing if none of the above match
    const date = new Date(timeframe)
    return isNaN(date.getTime()) ? 0 : date.getTime()
}
