import httpRequest from "~/utils/httpRequest";
const ENDPOINT = "/posts";

export const create = async (data) =>
  httpRequest.post(ENDPOINT, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const getOne = async (id) => httpRequest.post(String("\\") + `${id}`);
export const getAll = async () => {
  try {
    const res = await httpRequest.get("/posts");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
