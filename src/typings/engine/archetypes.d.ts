
declare namespace time {
	interface basic {
		list: string[];
	}
	interface format {
		today: string;
		tomorrow: string;
		now: number;
	}
}

declare namespace okt {
	interface system{
		callsToAPIsTiles:number;
		call:(req: any,opts:any|null,offset:any|string)=>any;
	}
	interface log {
		[key: string]: string;
	}
	class pepe {
		todo: string;
		key: number | null;
		arr: Array<time.basic>;
	}
}

declare module bk {
	module server {
		interface scriptInclude {
			new (type: "universal_table_key"): bk.types.key;
		}
	}
	module types {
		interface key extends bk.server.scriptInclude {
			u_table_id: number;
		}
	}
}
