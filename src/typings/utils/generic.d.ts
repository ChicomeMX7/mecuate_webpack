declare namespace Generic {
  export interface Object {
    [key: string | number | symbol]: string | number | CallableFunction | unknown
  }

  export interface Headers {
    [key: string]: string
  }

  export type CallOptions = {
    headers?: Headers
    data?: any
    responseType?: 'text' | 'json' | 'stream' | 'blob' | 'arrayBuffer' | 'formData'
    params?: Object
    withoutContentType?: boolean
  }

  export type Response<T> = {
    status: number
    statusText: string
    config: CallOptions
    data: T
    headers: Headers
    redirect: boolean
    url: string
    type: ResponseType
    body: ReadableStream<Uint8Array> | null
    bodyUsed: boolean
  }
}
