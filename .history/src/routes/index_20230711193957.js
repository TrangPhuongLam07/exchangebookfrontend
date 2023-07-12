import HomePage from "~/pages/home";
import config from "~/config";

const publicRoutes = [{ path: config.routes.home, component: <HomePage /> }];

export { publicRoutes };
