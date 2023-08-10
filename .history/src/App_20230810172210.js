import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { privateRoutes, publicRoutes } from "./config/routes";
import { generateRoutes } from "./routes";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import SharedStateService, {
  useShareState,
} from "~/services/SharedStateService";

const DefaultLayout = lazy(() => import("~/layouts/default"));
/*const SignUpPage = lazy(() => import("~/pages/auth/sign-up"));
const SignInPage = lazy(() => import("~/pages/auth/sign-in"));
const VerifyEmailPage = lazy(() => import("~/pages/auth/verify-email"));*/
const SignUpPage = lazy(() => import("~/pages/auth/sign-up"));
const SignInPage = lazy(() => import("~/pages/auth/sign-in"));
const VerifyEmailPage = lazy(() => import("~/pages/auth/verify-email"));
const ForgotPassPage = lazy(() => import("~/pages/auth/forgot-password"));
const DetaiPage = lazy(() => import("~/pages/detail"));
const Error401Page = lazy(() => import("~/pages/auth/401"));
const Error404Page = lazy(() => import("~/pages/auth/404"));
const Error403Page = lazy(() => import("~/pages/auth/403"));
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
        <SharedStateService>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/error/401" element={<Error401Page />} />
                <Route path="/error/404" element={<Error404Page />} />
                <Route path="/error/403" element={<Error403Page />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/verify-email" element={<VerifyEmailPage />} />
                <Route path="/detail-page" element={<DetaiPage />} />
                <Route path="/forgot-pass" element={<VerifyEmailPage />} />
                <Route
                  path="/forgot-pass/:email"
                  element={<ForgotPassPage />}
                />
                <Route path="/" element={<DefaultLayout />}>
                  {generateRoutes(publicRoutes)}
                  {generateRoutes(privateRoutes)}
                </Route>
              </Routes>
            </Suspense>
          </Router>
        </SharedStateService>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
