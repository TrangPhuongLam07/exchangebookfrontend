import config from "~/config";
import { lazy } from "react";
const HomePage = lazy(() => import("./routes/Home"));

const publicRoutes = [{ path: config.routes.home, component: <HomePage /> }];

export { publicRoutes };
