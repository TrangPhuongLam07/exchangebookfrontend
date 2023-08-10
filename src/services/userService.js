import httpRequest from "~/utils/httpRequest";
const REQUEST = "/posts";

export const update = async (data) =>
  httpRequest.post(REQUEST, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const getProfile = async () => {
    const res = await httpRequest.get(`/users/me`);
    return res.data;
};

export const checkPoint = async () => {
    const res = await httpRequest.get(`/check-point`);
    return res.data;
};

export const exchangeBook = async (data) => {

    const res = await httpRequest.post(`/exchange`, data, {
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            withCredentials: false
        },
    });
    return res;
    /* httpRequest.post(`/exchange`, data, {
         headers: {
             "Content-Type": "application/json",
         },
     });*/
}
