import httpRequest from "~/utils/httpRequest";
const ENDPOINT = "/posts";

export const create = async (data) =>
  httpRequest.post("/posts", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const getOne = async (id) => httpRequest.post(String("\\") + `${id}`);
export const getAll = async () => {
  httpRequest.get("/posts");
};
