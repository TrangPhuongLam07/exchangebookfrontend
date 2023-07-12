import config from "~/config";
import { lazy } from "react";
const HomePage = lazy(() => import("~/routes/home"));

const publicRoutes = [{ path: config.routes.home, component: <HomePage /> }];

export { publicRoutes };
