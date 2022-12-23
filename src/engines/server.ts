import { App, TemplatedApp } from "uWebSockets.js";

const server = App();
const { pid } = process;

const Server = async function(port: number = 3000)
	: Promise<TemplatedApp>  {

	port = Number(process.env.PORT || port);

	return new Promise((resolve) => {
		server.listen(port, () => {
			console.log('Server listen');
			console.table([{ port, pid }]);
			resolve(server);
		});
	});

}

export default Server;