import { useInfiniteQuery } from "@tanstack/react-query";
import { postService } from "~/utils/services";

const usePosts = () => {
  const { data, isFetchingNextPage, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: () => postService.getAll(),
    getNextPageParam: (lastPage, allPages) =>
      allPages.length < 2 && allPages.length + 1,
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });
  return {
    data,
    isFetchingNextPage,
    error,
    fetchNextPage,
  };
};

export default usePosts;
