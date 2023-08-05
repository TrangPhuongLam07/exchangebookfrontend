const routes = {
  home: "/",
  detailPage: "/detail-page",
  signInPage: "/sign-in",
  signUpPage: "/sign-up",
  verifyEmailPage: "/password-reset",
  forgotPassPage: "/password-reset/:email",
  management: {
    management: "/management",
    add: "/management/add",
    update: "/management/update/:id",
    transaction: "/management/transaction",
    profile: "/management/profile",
  },

};
export default routes;
