import httpRequest from "~/utils/httpRequest";
const REQUEST = "/posts";

export const update = async (data) =>
  httpRequest.post(REQUEST, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const getProfile = async () => {
  const res = await httpRequest.get(`/users/me`);
  return res.data;
};
