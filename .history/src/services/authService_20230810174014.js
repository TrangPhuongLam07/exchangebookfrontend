import httpRequest from "~/utils/httpRequest";
const REQUEST = "/auth";
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
// export const register = async (data) => {
//   httpRequest.post(REQUEST + "/register", data, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

// }

// export const login = async (data) => {
//   const res = await httpRequest.post(`${REQUEST}/login`, data, {
//     headers: {
//     //  'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//   });
//   return res ;
// }

export const verifyEmail = async (data) => {
  const res = await httpRequest.post(
    `${REQUEST}/forget-password?email=${data.email}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};

// export const forgotPass = async (data) => {
//   const res = await httpRequest.put(
//       `${REQUEST}/forget-password/verify`, data, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
// return res;
// }
// export const resetPass = async (data) => {
//   httpRequest.put(`${REQUEST}/resetPass`, data, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

// }

// export const logout = async (data) => {
//   httpRequest.post(`${REQUEST}/logout`, data, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }
