import httpRequest from "~/utils/httpRequest";
const REQUEST = "/posts";

export const create = async (data) =>
  httpRequest.post(REQUEST, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const getOne = async (id) => httpRequest.get(REQUEST + `/${id}`);
export const getAll = async () => {
  try {
    const res = await httpRequest.get(REQUEST);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
