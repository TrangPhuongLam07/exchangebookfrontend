import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo, useRef } from "react";
import Feed from "~/components/feed";
import { postService } from "~/services";

const HomePage = () => {
  const { data, isFetchingNextPage, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: () => postService.getAll(),
      getNextPageParam: (lastPage, allPages) =>
        allPages.length < 2 && allPages.length + 1,
      getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
    });
  const intObserver = useRef();
  const lastPost = useMemo(
    (posts) => {
      if (isFetchingNextPage) return;
      intObserver.current && intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage)
          intObserver.current.observe(posts);
      });
      posts && intObserver.current.observe(posts);
    },
    [isFetchingNextPage, hasNextPage]
  );
  return (
    <>
      <Feed />
    </>
  );
};

export default HomePage;
