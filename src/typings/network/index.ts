import { GenericObject } from '../generic/generic'
export type URL = string

export type Method = 'GET' | 'POST' | 'CREATE' | 'PATCH' | 'OPTIONS' | 'DELETE'

export type Data = BodyInit | GenericObject | string | undefined | null

export type Headers = HeadersInit & {
    Authorization?: string
    [key: string | number | symbol]: string | undefined | null
}

export type ResponseType = 'json' | 'text' | 'bytes'

export type ParamsObject = GenericObject | undefined | null

export type FetchConfig = {
    data?: Data | any
    params?: GenericObject | undefined | null
    responseType: ResponseType
    [key: string | number | symbol]: string | boolean | number | GenericObject | undefined | null
}

export type Network = {
    createFetch: (
        url: URL,
        method: Method,
        data: Data,
        headers: Headers,
        response: ResponseType
    ) => Promise<Response>
}
