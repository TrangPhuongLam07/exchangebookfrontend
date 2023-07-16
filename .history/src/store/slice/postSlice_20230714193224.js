const postSlice = (set) => ({
  posts: [],
  add: () => set((state) => console.log(state)),
});
export default postSlice;
