import { Wsapix } from "wsapix";
import Server from "./server";
import validator from "./validation";
import wApi from "../wapi";
import AppModules from "../../app.modules";
import printf from "./lib/print";

async function main(options: MainOptions): Promise<void> {
	printf.success("\n ----- initialized applications ----- \n");
	const server = await Server(options.port);
	
	global.wsx = Wsapix.uWS({ server }, { validator });
	useModules(AppModules);

	wApi(server, options.wapi);
}

function useModules(appModiles: AppModulesI): void {
	let providers: Array<any> = [],
		services: Array<any> = [],
		iteration: Array<{
			name: AppModulesT,
			item: any
		}> = [];

	if (Object.keys(appModiles).indexOf('providers') != -1) {
		providers = appModiles['providers'];
		iteration.push({
			name: 'providers',
			item: providers,
		});
	}
	if (Object.keys(appModiles).indexOf('services') != -1) {
		services = appModiles['services'];
		iteration.push({
			name: 'services',
			item: services,
		});
	}

	for (const item of iteration) {
		for (const cls of item.item) {
			const ncls = new cls();
			const listMethodsNames = Object.getOwnPropertyNames(Object.getPrototypeOf(ncls));
			for (const method of listMethodsNames) {
				ncls[method]();
			}
		}
	}


}

export default main;


