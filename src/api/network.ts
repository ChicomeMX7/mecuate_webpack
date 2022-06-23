import { Cookies } from 'react-cookie'
import { MECUATE_PUBLIC_API } from './config'
import { isEmpty } from 'lodash'
import qs from 'query-string'
import { AcceptTypes, Network } from '../typings/utils/network'

const makeQueryString = (options) => {
  if (isEmpty(options)) return ''
  const Query = qs.stringify(options, {
    arrayFormat: 'bracket',
    skipEmptyString: true,
    skipNull: true,
  })

  return Query.length ? `?${Query}` : ''
}

const composeData = (method: string, { data }: Network.Request) => {
  switch (method) {
    case 'GET':
      return null
    case 'PATCH':
      return JSON.stringify(data)
    case 'POST':
      return JSON.stringify(data)
    case 'DELETE':
      return JSON.stringify(data)
    default:
      return null
  }
}

export const baseConfig = { data: {}, accept: AcceptTypes.JSON, type: 'json' }

export function createClient(baseURL: string) {
  const cookies = new Cookies()
  const token = cookies.get('user')

  const client = {
    baseURL: baseURL,
    call: (pathAddress: string, configs: Network.Request, _method: string) => {
      const customHeaders: Network.Headers = {
        accept: configs.accept,
        authorization: `Bearer ${token.accessToken}`,
      }
      const data = composeData(_method, configs)
      const query = makeQueryString(configs.filter)
      const url = `${client.baseURL}/${pathAddress}${query}`

      return fetch(url, {
        method: _method,
        body: data as any,
        mode: 'cors',
        headers: customHeaders,
      })
        .then((response) => response.json())
        .then((response: Network.Response) => {
          if (configs.type === 'stream') {
            return response.data
          }

          return JSON.parse(response.data)
        })
    },
    get: (pathAddress: string, configs: Network.Request = baseConfig) =>
      client.call(pathAddress, configs, 'GET'),
    post: (pathAddress: string, configs: Network.Request) =>
      client.call(pathAddress, configs, 'POST'),
    patch: (pathAddress: string, configs: Network.Request) =>
      client.call(pathAddress, configs, 'PATCH'),
    delete: (pathAddress: string, configs: Network.Request) =>
      client.call(pathAddress, configs, 'DELETE'),
  }
  return client
}

export const MecuateApiProvider = createClient(MECUATE_PUBLIC_API)
