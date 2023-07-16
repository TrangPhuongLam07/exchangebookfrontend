import config from "~/config";
import { lazy } from "react";

const HomePage = lazy(() => import("~/pages/home"));
const AddProductPage = lazy(() => import("~/pages/management/add-post"));
const DefaultLayout = lazy(() => import("~/layouts/default"));

const publicRoutes = [
  {
    path: config.routes.home,
    component: HomePage,
    layout: DefaultLayout,
  },
];
const privateRoutes = [
  {
    path: config.routes.management.add,
    component: AddProductPage,
    layout: DefaultLayout,
  },
];

export { publicRoutes };
