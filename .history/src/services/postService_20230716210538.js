import httpRequest from "~/utils/httpRequest";
const ENDPOINT = "/posts";

const create = async (data) =>
  httpRequest.post(ENDPOINT, data, {
    headers: {
      "Content-Type": "multipart/file",
    },
  });
