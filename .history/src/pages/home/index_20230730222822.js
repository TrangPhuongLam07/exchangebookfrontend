import { isError, useInfiniteQuery } from "@tanstack/react-query";
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
    getNextPageParam: (lastPage, allPages) =>
      allPages.length < 2 && allPages.length + 1,
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });
  const intObserver = useRef();
  const lastPostRef = useMemo(
    (post) => {
      if (isFetchingNextPage) return;
      intObserver.current && intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((post) => {
        console.log(post);
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
      {data?.pages.map((post, i) => {
        return data?.pages.length - 1 === i && lastPostRef ? (
          <Post ref={lastPostRef} post={post} />
        ) : (
          <Post post={post} />
        );
      })}
    </Feed>
  );
};

export default HomePage;
