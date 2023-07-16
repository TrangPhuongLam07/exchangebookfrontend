const { default: httpRequest } = require("~/utils/httpRequest");

const findById = async (id) => httpRequest.get(`/${id}`);
