const { default: httpRequest } = require("~/utils/httpRequest");

export const findById = async (id) => {
  try {
    const res = await httpRequest.get(`/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
