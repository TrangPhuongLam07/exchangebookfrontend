import httpRequest from "~/utils/httpRequest";
const ENDPOINT = "/posts";

export const create = async (data) =>
  httpRequest.post(ENDPOINT, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export default postService;
