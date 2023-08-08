import httpRequest from "~/utils/httpRequest";
const prefix = `auth`;
const REQUEST = "/auth";

export const signIn = async (signInRequest) => {
  const res = await httpRequest.post(`/${prefix}/login`, signInRequest);
  return res.data;
};
export const signUp = async (signUpRequest) => {
  const res = await httpRequest.post(`/${prefix}/register`, signUpRequest);
  return res.data;
};
export const signOut = async () => {
  const res = await httpRequest.get(`/${prefix}/logout`);
  return res.data;
};
export const getProfile = async (id) => {
  const res = await httpRequest.get(`${prefix}/me`);
};

// export const register = async (data) =>
//   httpRequest.post(REQUEST + "/register", data, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

// export const login = async (data) =>
//   httpRequest.post(REQUEST + "/login", data, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

// export const verifyEmail = async (data) =>
//   httpRequest.post(REQUEST + "/login", data, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

// export const resetPass = async (data) =>
//   httpRequest.post(REQUEST + "/login", data, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

// export const logout = async (data) =>
//   httpRequest.post(REQUEST + "/login", data, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
