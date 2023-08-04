import { Fragment, lazy } from "react";
import { Route } from "react-router-dom";
import config from "~/config";
import DefaultLayout from "~/layouts/default";
const PageWrapper = lazy(() => import("~/layouts/page-wrapper"));

const generateRoutes = (routes) =>
  routes.map((route, index) => {
    let Layout = DefaultLayout;
    if (Object.is(route.layout, null)) Layout = Fragment;
    if (route.layout) Layout = route.layout;

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
