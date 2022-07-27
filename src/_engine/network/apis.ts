import {
    MECUATE_GIST_API,
    MECUATE_CERT_API,
    MECUATE_STATIC_RESOURCES_API,
    MECUATE_REMOTE_API,
} from './config'
import { user } from '../user/user'
import { object2Query } from './utils'
import {
    URL,
    Method,
    Data,
    Headers,
    ResponseType,
    Network,
    FetchConfig,
} from '../../typings/network/index'

export const createFetch = (
    url: URL,
    method: Method,
    data: Data,
    headers: Headers,
    response: ResponseType = 'json'
) => {
    return fetch(url, {
        method,
        body: data as any,
        headers,
    })
        .then((res) => {
            if (response === 'json') {
                return res.json()
            }
            if (response === 'text') {
                return res.text()
            }
        })
        .catch((err) => err)
}

export const createAPIClient = (baseURL: string) => {
    async function client(
        endpoint: URL,
        method: Method,
        config:FetchConfig = { responseType: 'json' }
    ) {
        const { responseType } = config
        let url = `${baseURL}${endpoint}`
        let data = config?.data
        const auth = {
            type: user.Token ? user.Token : 'Bearer',
            token: user?.accessToken,
        }
        const headers = {
            Accept: 'application/json',
        }
        if (user?.accessToken) {
            headers['Authorization'] = `${auth.type} ${auth.token}`
        }
        if ( data && typeof data === 'object' ) {
            data = JSON.stringify(data)
        }
        if (config.params) {
            url += object2Query(config.params)
        }

        return createFetch(url, method, data, headers, responseType)
    }

    client.get = (url: string, config: FetchConfig) =>
        client(url, 'GET', config)
    client.delete = (url: string, config: FetchConfig) =>
        client(url, 'DELETE', config)
    client.post = (url: string, config: FetchConfig) =>
        client(url, 'POST', config)
    client.patch = (url: string, config: FetchConfig) =>
        client(url, 'PATCH', config)

    return client
}

export const MecauteStaticProvider = createAPIClient(
    MECUATE_STATIC_RESOURCES_API
)
