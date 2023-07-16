import { createSlice } from "zustand";

const postSlice = createSlice({
  name: "post",
  initialState: {
    id,
    title,
    authorId,
    publishDate,
    price,
  },
  reducers: {},
});
export default postSlice;
