///<reference  path="../../../src/typings/main.d.ts"/>
const __system__: okt.system = {
    callsToAPIsTiles:0,
    call:(req: any,opts:any|null = null,offset=null)=>{
        
        let __d = opts && opts.dir ? opts.dir : './api/v1/map/call/tile';
        let _offset:string|any = offset ? offset : 'cors';
        let r = new Request(__d,{ method: 'POST', headers: {'Content-Type': 'application/json' },body: req , mode: _offset });

        let res = {};
        
        fetch(r).then((resp_call) => resp_call.json()).then((jres)=>{
            
            res = jres;

        }).catch( e => {  console.error('Error:', e);   });
        
        return res;
    }
};