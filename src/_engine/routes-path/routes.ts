export type URIParams = {
    pathname: string
    search: string
    href: string
    host: string
}

export type w_type = {
    path_parts?: Array<any>
    grado?: string
    edu?: boolean
    furl?: string
    host?: string
    task?: string
    [key:string | number]: string | boolean | undefined | Array<any>
}

const convertURI = ({ pathname, search, href, host }:URIParams) => {
    let w_:w_type = {}
    let path_parts = pathname.split('/')
    w_.path_parts = path_parts.filter((i) => !!i)
    path_parts.forEach((e) => {
        if (['tercero', 'segundo', 'primero'].includes(e)) {
            w_.grado = e
        }
        if (e == 'ed') {
            w_.edu = true
        }
    })

    search.replace('?', '')
    .split('&')
    .forEach((e) => {
        if (!e) {
            return
        }
        let ee = e.split('=')
        w_[ee[0]] = ee[1]
    })
    w_.furl = href
    w_.host = host
    let repTask = String(path_parts.at(-1))
    repTask = repTask.replace('.html', '')
    repTask = repTask.replace('.php', '')
    repTask = repTask.replace('.net', '')
    repTask = repTask.replace('.okt', '')
    w_.task = repTask

    return w_
}

export { convertURI }
