import config from "~/config";
import { lazy } from "react";

const HomePage = lazy(() => import("~/pages/home"));
const DefaultLayout = lazy(() => import("~/layouts/default"));

const publicRoutes = [
  {
    path: config.routes.home,
    component: HomePage,
    layout: DefaultLayout,
  },
  { path: config.routes.management, component: ManagementPage },
];

export { publicRoutes };
