import { POST_STATUS } from "~/utils/constant";
import httpRequest from "~/utils/httpRequest";
const REQUEST = "/posts";

export const create = async (data, config) => {
  try {
    const response = await httpRequest.post(REQUEST, data, config);
    console.log(0);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (id) => {
  try {
    const res = await httpRequest.get(REQUEST + `/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAll = async ({ pageParam = 5 }, page = 1) =>
  await httpRequest.get(`${REQUEST}?page=${page}&size=${pageParam}`);

export const getAllByMe = async (
  size = 5,
  page = 1,
  status = POST_STATUS.APPROVED
) => {
  await httpRequest.get(
    `/users/me${REQUEST}?page=${page}&size=${pageParam}&status=${status}`
  );
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
