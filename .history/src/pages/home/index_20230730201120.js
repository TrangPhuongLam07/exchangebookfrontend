import { useInfiniteQuery } from "@tanstack/react-query";
import { postService } from "~/services";

const HomePage = () => {
  const { data, isFetchingNextPage, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: () => postService.getAll(),
    getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });
  console.log(data);
  return <></>;
};

export default HomePage;
