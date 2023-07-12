import config from "~/config";
import { lazy } from "react";
const HomePage = lazy(() => import("~/pages/home"));

const publicRoutes = [
  { path: config.routes.home, component: <HomePage /> },
  { path: config.routes.home, component: <HomePage /> },
];

export { publicRoutes };
