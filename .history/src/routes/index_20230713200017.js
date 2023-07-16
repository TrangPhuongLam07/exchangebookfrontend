import config from "~/config";
import { lazy } from "react";

const HomePage = lazy(() => import("~/pages/home"));
const AddPostPage = lazy(() => import("~/pages/management/add-post"));
const TransactionPage = lazy(() => import("~/pages/management/transaction"));
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
    component: AddPostPage,
    layout: DefaultLayout,
  },
  {
    path: config.routes.management.transaction,
    component: TransactionPage,
    layout: DefaultLayout,
  },
];

export { publicRoutes, privateRoutes };
