///<reference  path="../../../src/typings/main.d.ts"/>
import { __system__ } from '@/_engine/__system__/__system__'


const map_loader = (p: number) => {
    return {
        refresh: p,
        mem: storage(p.toString()),
        call: (req: any) => {
            __system__.call(req, null, null)
        },
        process: (res: { [x: string]: any }) => {
            let rKeys: any[] = Object.keys(res)
            let compiled: any = {}
            for (let i = 0; i < rKeys.length; i++) {
                compiled[rKeys[i]] = `_${res[rKeys[i]]}`
            }
            return compiled
        },
        getTiles: (tileReq: any) => {
            return {
                call_api: __system__.callsToAPIsTiles,
                tiles: tileReq,
            }
        },
    }
}

const storage = (pos: string) => {
    return localStorage.getItem(pos)
}

export { map_loader, storage }
