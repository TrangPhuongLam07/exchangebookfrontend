import httpRequest from "~/utils/httpRequest";

const prefix = `auth`;

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
