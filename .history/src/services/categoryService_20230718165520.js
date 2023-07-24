import httpRequest from "~/utils/httpRequest";
const options = [
  { id: 1, value: "Option 1", label: "Option 1" },
  { id: 2, value: "Option 2", label: "Option 2" },
  { id: 3, value: "Option 3", label: "Option 3" },
];
export const findById = async (id) => {
  try {
    const res = await httpRequest.get(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// try {
//   const res = await httpRequest.get(`/posts`);
//   return res.data;
// } catch (error) {
//   console.log(error);
// }
export const findAll = async () => {
  try {
    const res = await httpRequest.get(`/categories`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
