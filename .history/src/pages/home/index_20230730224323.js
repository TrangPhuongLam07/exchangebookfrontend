import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo, useRef } from "react";
import Feed from "~/components/feed";
import Post from "~/components/post";
import { postService } from "~/services";

const HomePage = () => {
  const {
    data,
    isFetchingNextPage,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: () => postService.getAll(),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < 1 && allPages.length + 1;
    },
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });
  const intObserver = useRef();
  const lastPostRef = useMemo(
    (post) => {
      if (isFetchingNextPage) return;
      intObserver.current && intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((post) => {
        if (post[0].isIntersecting && hasNextPage) fetchNextPage();
      });
      post && intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );
  if (isLoading) return <>isLoading</>;
  if (error) return <>Error: {error.message}</>;

  return (
    <Feed>
      {data?.pages.map((page, i) => {
        return page.map((post) => {
          if (data?.pages.length - 1 === i) {
            return <Post ref={lastPostRef} post={post} />;
          }
          return <Post post={post} />;
        });
      })}
    </Feed>
  );
};

export default HomePage;
