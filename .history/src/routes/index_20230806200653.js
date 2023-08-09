import { Fragment, lazy } from "react";
import { Route } from "react-router-dom";

const PageWrapper = lazy(() => import("~/layouts/page-wrapper"));

export const generateRoutes = (routes) =>
  routes?.map((route, index) => {
    const Guard = route.guard ? route.guard : Fragment;
    return (
      <Guard>
        <Route
          key={index}
          path={route.path}
          element={
            <PageWrapper state={route.state}>{route.element}</PageWrapper>
          }
        >
          {route.child && generateRoutes(route.child)}
        </Route>
      </Guard>
    );
  });
