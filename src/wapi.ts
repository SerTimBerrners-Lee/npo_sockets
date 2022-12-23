

const wApi = function(server: any, options: WapiOptions) {
	
	server.get("/", (res: any) => {
		res.writeHeader('Content-Type', 'text/html');
		res.end(wsx.htmlDocTemplate("/wsapix"));
	});
	
	server.get("/wsapix", (res: any) => {
		res.writeHeader('Content-Type', 'application/json');
		res.end(wsx.asyncapi({
			info: {
				version: options.version || "1.0.0",
				title: options.title || "Websocket API"
			}
		}));
	});
}

export default wApi;