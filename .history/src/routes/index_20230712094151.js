import config from "~/config";
import { lazy } from "react";

const HomePage = lazy(() => import("~/pages/home"));
const ManagementPage = lazy(() => import("~/pages/management"));

const publicRoutes = [
  { path: config.routes.home, component: <HomePage /> },
  { path: config.routes.management, component: <ManagementPage /> },
];

export { publicRoutes };
