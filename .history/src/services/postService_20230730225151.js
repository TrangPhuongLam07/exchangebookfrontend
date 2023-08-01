import httpRequest from "~/utils/httpRequest";
const REQUEST = "/posts";

export const create = async (data) =>
  httpRequest.post(REQUEST, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const getOne = async (id) => {
  try {
    const res = await httpRequest.get(REQUEST + `/${id}`);
    return res.data;
  } catch (error) {}
};
export const getAll = async ({ pageParam }, page = 1) => {
  try {
    const res = await httpRequest.get(
      `${REQUEST}?page=${page}&size=${pageParam}`
    );
    return res.data.postsResponses;
  } catch (error) {
    console.log(error);
  }
};
export const updateOne = async (id, data) => {
  try {
    const res = await httpRequest.put(`${REQUEST}/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteOne = async (id) => {
  try {
    const res = await httpRequest.delete(`${REQUEST}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
