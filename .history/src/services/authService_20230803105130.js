import httpRequest from "~/utils/httpRequest";

const prefix = `auth`;
export const signIn = async (signInRequest) => {
  console.log(signInRequest);
  try {
    const res = await httpRequest.post(`/${prefix}/register`, signInRequest);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const signUp = async (signUpRequest) => {
  const res = await httpRequest.post(`/${prefix}/register`, signUpRequest);
  return res.data;
};
