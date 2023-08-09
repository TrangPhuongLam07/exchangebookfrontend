import { Fragment, lazy } from "react";
import { Route } from "react-router-dom";

const PageWrapper = lazy(() => import("~/layouts/page-wrapper"));

export const generateRoutes = (routes) =>
  routes?.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
      >
        {route.child && generateRoutes(route.child)}
      </Route>
    );
  });
