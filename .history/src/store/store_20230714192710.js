import { create } from ("zustand");

const useStore = create((set)=>({
  post: {
    id,
    title,
    author
  }
}))

export default useStore