import { create } from "zustand";
import postSlice from "./slice/postSlice";
const useStore = create((set) => ({
  ...postSlice(set),
}));

export default useStore;
