import { ParamsObject } from '../../typings/network/index'

const decode = (params: ParamsObject) => {
    const convert = {
        object: (k: string, v: any) => {
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
        function: (k: string, v: any) => `exec=${k}`,
        string: (k: string, v: any) => `${k}=${v}`,
        number: (k: string, v: any) => `${k}=${v}`,
        boolean: (k: string, v: any) => `${k}=${v}`,
        bigint: (k: string, v: any) => '',
        symbol: (k: string, v: any) => '',
        undefined: (k: string, v: any) => '',
    }

    let result = '?'
    const KeyNames = [
        'object',
        'function',
        'string',
        'number',
        'boolean',
        'bigint',
        'symbol',
        'undefined',
    ]

    for (const key in params) {
        if (Object.hasOwnProperty.call(params, key)) {
            const prev = typeof params[key]
            const item: keyof typeof convert = KeyNames.includes(prev)
                ? `${prev}`
                : 'undefined'

            if (!item) continue
            const fun = convert[item]
            result += fun(key, params[key])
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
