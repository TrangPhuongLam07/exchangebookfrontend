import { POST_STATUS } from "~/utils/constant";
import httpRequest from "~/utils/httpRequest";
const REQUEST = "/posts";

export const create = async (data, config) =>
  await httpRequest.post(REQUEST, data, config);

export const getOne = async (id) => await httpRequest.get(REQUEST + `/${id}`);

export const getAll = async ({ pageParam = 5 }, page = 1) =>
  await httpRequest.get(`${REQUEST}?page=${page}&size=${pageParam}`);

export const getAllByMe = async (pagination, status) => {
  const { page, size } = pagination;
  console.log(123);
  return await httpRequest.get(
    `/users/me${REQUEST}?page=${page}&size=${size}&status=${status}`
  );
};

export const updateOne = async (id, data) => {
  try {
    const res = await httpRequest.put(`${REQUEST}/${id}`, data);
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
