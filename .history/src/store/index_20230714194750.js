import { create } from "zustand";
import postSlice from "./slice/postSlice";
const useStore = create((...a) => ({
  ...postSlice(...a),
}));

export default useStore;
