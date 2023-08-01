export const update = async (data) =>
  httpRequest.post(REQUEST, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
