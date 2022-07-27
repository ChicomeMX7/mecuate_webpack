const set_cookie_time = (value) => {
    try {
        const _date = new Date(value)
        return _date.toUTCString()
    } catch (error) {
        return standard_cookie_duration()
    }
}

const standard_cookie_duration = () => {
    const date_time = fetch('/assets/remote/c-time-date.txt')
        .then((res) => res.text())
        .then((time) => {
            const limit = new Date(time)
            return limit.toUTCString()
        })
        .catch((er) => {
            const today = new Date()
            const next = new Date(today)
            next.setDate(next.getDate() + 3)
            return next.toUTCString()
        })
    return date_time
}

const gmt_time_string = () => new Date().toGMTString()

const create_cookie = (name, data, time = false) => {
    const _time = time ? set_cookie_time(time) : standard_cookie_duration()
    const string_data = typeof data === 'string' ? data : JSON.stringify(data)
    document.cookie = `${name}=${string_data}; SameSite=Lax; Secure; ${_time}`
}

const read_cookie = () => {
    const all = document.cookie.split('; ').map((item) => {
        const cookieSection = item.split('=')
        const res = {}
        res[`${cookieSection[0]}`] = JSON.parse(cookieSection[1])
        return res
    })

    return all
}

const get_cookie = (cname) => {
    const target = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${cname}=`))
        ?.split('=')[1]

    return target ? JSON.parse(target) : {}
}

const _cookie = {
    create: create_cookie,
    read: read_cookie,
    get: get_cookie,
}

export { _cookie }
