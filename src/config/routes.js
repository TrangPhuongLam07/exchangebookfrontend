const routes = {
  home: "/",
  detailPage: "/detail-page",
  signInPage: "/sign-in",
  signUpPage: "/sign-up",
  resetPassPage: "/password-reset/:email",
  verifyEmailPage: "/password-reset",
  management: {
    management: "/management",
    add: "/management/add",
    update: "/management/update/:id",
    transaction: "/management/transaction",
    profile: "/management/profile",
  },

};
export default routes;
