export enum AcceptTypes {
  JSON = 'application/json',
  PDF = 'application/pdf',
  CSV = 'application/csv',
  ZIP = 'application/zip',
  H264 = 'video/H264',
  H265 = 'video/H265',
  QUICKTIME = 'video/quicktime',
  BYTES = 'bytes',
  PLAIN = 'text/plain',
  OBJ = 'model/obj',
  MTL = 'model/mtl',
  MP3 = 'audio/mpeg',
  ACC = 'audio/acc',
  OGG = 'audio/ogg',
  OPUS = 'audio/opus',
  WAV = 'audio/wav',
  MIDI = 'audio/midi',
}
export namespace Network {
  export type RequestType = string

  export type AllowedData = string | number | object | Array<string | number> | boolean | undefined

  export type AcceptTypesU = AllowedData | undefined

  export type ResponseDataType = string

  export interface Filters {
    [key: string | number]: AllowedData
  }

  export interface Request {
    data: AllowedData
    accept: AcceptTypes
    type: RequestType
    filter?: Filters
  }

  export interface Headers {
    accept: AcceptTypes
    authorization: string
    [key: string]: string
  }

  export type CallOptions = {
    headers?: Headers
    data?: any
    responseType?: 'text' | 'json' | 'stream' | 'blob' | 'arrayBuffer' | 'formData'
    params?: Object
    withoutContentType?: boolean
  }

  export type Response = {
    type: ResponseType
    data: ResponseDataType
    status: number
    statusText: string
  }
}
