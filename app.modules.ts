import { ControllerIndex } from "./src/controllers";
import { ServicesIndex } from "./src/service";


const AppModules: AppModulesI = {
	services: [ServicesIndex],
	providers: [ControllerIndex]
}

export default AppModules;