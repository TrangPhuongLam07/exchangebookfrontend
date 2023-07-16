import { Fragment, Suspense } from "react";
import { publicRoutes } from "~/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = route.layout || Fragment;
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />;
          })}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
