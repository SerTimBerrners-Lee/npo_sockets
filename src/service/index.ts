
export class ServicesIndex {

  connected() {
		wsx.on("connect", (client: any) => {
			console.log('connected')
			wsx.clients.forEach((c: any) => {
				if (c === client) { return } 
				c.send({ type: "user:connected", ...client.state })
				client.send({ type: "user:connected", ...c.state })
			});
		});
	}

	disconnected() {
		// Handle disconnect event
		wsx.on("disconnect", (client: any) => {
			wsx.clients.forEach((c) => {
				if (c === client) { return }
				c.send({ type: "user:disconnected", ...client.state })
			});
		});
	}  
}