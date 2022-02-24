
declare namespace map {
    interface engine{
        storage: any;
        position: any;
    }
    interface region {
        x:number;
        y:number;
        size:number;
    } 
    interface object {
        region:map.region;
    }
    interface response {
        date: string;
        api: string|null;
        json: object;
        data: Array[object];
        path: Array[];
    }
    
    interface tiles {
        png?: any|null;
        jpg?: any|null;
        bmp?: any|null;
    }

    interface request {
        curr: string[];
        next: object;
        time: string|number|null;
        id: string;
    }
    interface loader {
        refresh: number;
        mem: map.engine.storage;
        call(req:map.request):map.response;
        process(res:map.response):map.object;
        getTiles(tileReq:map.request):map.tiles;
    }
    
}