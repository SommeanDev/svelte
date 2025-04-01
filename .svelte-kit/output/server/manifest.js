export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CkyKAbbT.js",app:"_app/immutable/entry/app.D-YYjTnk.js",imports:["_app/immutable/entry/start.CkyKAbbT.js","_app/immutable/chunks/Dktdgy8O.js","_app/immutable/chunks/DlCOA05K.js","_app/immutable/chunks/AH6wCt5J.js","_app/immutable/entry/app.D-YYjTnk.js","_app/immutable/chunks/DlCOA05K.js","_app/immutable/chunks/CX4tAxLR.js","_app/immutable/chunks/DGzMlDlD.js","_app/immutable/chunks/Sk8rondT.js","_app/immutable/chunks/rVNwLq-7.js","_app/immutable/chunks/AH6wCt5J.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/about","/sverdle/how-to-play"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
