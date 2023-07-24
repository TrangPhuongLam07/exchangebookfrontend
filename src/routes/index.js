import config from "~/config";
import { lazy } from "react";

const HomePage = lazy(() => import("~/pages/home"));
const AddPostPage = lazy(() => import("~/pages/management/add-post"));
const UpdatePostPage = lazy(() => import("~/pages/management/update-post"));
const ManagementPage = lazy(() => import("~/pages/management"));
const TransactionPage = lazy(() => import("~/pages/management/transaction"));

const DetailPage = lazy(() => import("~/pages/detail"));

const DefaultLayout = lazy(() => import("~/layouts/default"));
const ManagementLayout = lazy(() => import("~/layouts/management"));
const DetailLayout = lazy(() => import("~/layouts/detail"));


const publicRoutes = [
  {
    path: config.routes.home,
    component: HomePage,
    layout: DefaultLayout,
  },
];
const privateRoutes = [
  {
    path: config.routes.management.management,
    component: ManagementPage,
    layout: ManagementLayout,
  },
  {
    path: config.routes.management.add,
    component: AddPostPage,
    layout: ManagementLayout,
  },
  {
    path: config.routes.management.update,
    component: UpdatePostPage,
    layout: ManagementLayout,
  },
  {
    path: config.routes.management.transaction,
    component: TransactionPage,
    layout: ManagementLayout,
  },
  {
    path: config.routes.detailPage,
    component: DetailPage,
    layout: ManagementLayout,
  },
];

export { publicRoutes, privateRoutes };
