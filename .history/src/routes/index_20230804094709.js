import { Fragment, lazy } from "react";
import { Route } from "react-router-dom";
import config from "~/config";
const DefaultLayout = lazy(() => import("~/layouts/default"));
const PageWrapper = lazy(() => import("~/layouts/page-wrapper"));

const generateRoutes = (routes) =>
  routes?.map((route, index) => {
    let Layout;
    switch (route.layout) {
      case "undefined":
        Layout = DefaultLayout;
        break;
      case null:
        Layout = Fragment;
        break;
      default:
        Layout = route.layout;
        break;
    }
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <PageWrapper state={route.state}>
            <Layout>{route.element}</Layout>
          </PageWrapper>
        }
      >
        {route.child && generateRoutes(route.child)}
      </Route>
    );
  });
export const routes = generateRoutes(config.routes);
