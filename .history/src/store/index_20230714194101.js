import { create } from "zustand";
import postSlice from "./slice/postSlice";
const useStore = create((...state) => ({
  ...postSlice(...state),
}));

export default useStore;
