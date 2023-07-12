import { lazy } from "react";

import config from "~/config";

const HomePage = lazy(() => import("./routes/Home"));

const publicRoutes = [{ path: config.routes.home, component: <HomePage /> }];

export { publicRoutes };
