import { Suspense } from "react";
import { publicRoutes } from "~/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
