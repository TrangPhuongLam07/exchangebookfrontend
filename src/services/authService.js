import httpRequest from "~/utils/httpRequest";

const prefix = `auth`;
export const signIn = async (signInRequest) => {
  const res = await httpRequest.post(`/${prefix}/register`, signInRequest);
  return res.data;
};
export const signUp = async (signUpRequest) => {
  const res = await httpRequest.post(`/${prefix}/register`, signUpRequest);
  return res.data;
};
