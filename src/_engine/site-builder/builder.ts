import { MecauteStaticProvider } from '../network/apis.js'
import { FetchConfig } from '../../typings/network/index'

export type BuildParams = any & {
    [key: string | number | symbol]: string | boolean | object | undefined | null
}

const build = (param: BuildParams) => {
    const endpoint = '/core/aHtml:latest'
    const params:FetchConfig = { responseType: 'json', params: param }

    return Promise.resolve(MecauteStaticProvider.get(endpoint, params))
}

export { build }
