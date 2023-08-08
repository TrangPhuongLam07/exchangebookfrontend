import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { privateRoutes, publicRoutes } from "./config/routes";
import { generateRoutes } from "./routes";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";

const DefaultLayout = lazy(() => import("~/layouts/default"));
const SignUpPage = lazy(() => import("~/pages/auth/sign-up"));
const SignInPage = lazy(() => import("~/pages/auth/sign-in"));
const VerifyEmailPage = lazy(() => import("~/pages/auth/verify-email"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
      />
      <AuthProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/error/401" element={<SignInPage />} />{" "}
              <Route path="/error/402" element={<SignInPage />} />
              <Route path="/error/403" element={<SignInPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/verify-email" element={<VerifyEmailPage />} />
              <Route path="/" element={<DefaultLayout />}>
                {generateRoutes(publicRoutes)}
                {generateRoutes(privateRoutes)}
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
