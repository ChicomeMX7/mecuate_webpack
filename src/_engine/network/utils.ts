import { ParamsObject } from '../../typings/network/index'

const decode = (params) => {
    const convert = {
        object: (k, v) => {
            if (v.length) {
                return `${k}=${v.toString()}`
            }
            let res = `${k}=[`
            for (const [key, value] of Object.entries(v)) {
                res += `${key}:${value}`
            }
            res += ']'
            return res
        },
        function: (k, v) => `exec=${k}`,
        string: (k, v) => `${k}=${v}`,
        number: (k, v) => `${k}=${v}`,
        boolean: (k, v) => `${k}=${v}`,
    }

    let result = '?'

    for (const key in params) {
        if (Object.hasOwnProperty.call(params, key)) {
            const item = params[key] ? typeof params[key] : null
            if (!item) continue
            result += convert[item](key, params[key])
            result += '&'
        }
    }
    result = result.substring(0, result.length - 1)

    return result
}

const object2Query = (params: ParamsObject = null) => {
    if (!params) {
        return ''
    }

    return decode(params)
}

export { object2Query, decode }
