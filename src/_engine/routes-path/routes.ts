const convertURI = ({ pathname, search, href, host }) => {
    let w_ = {}
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
