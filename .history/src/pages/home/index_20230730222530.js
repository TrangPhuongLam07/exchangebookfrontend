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
    (posts) => {
      if (isFetchingNextPage) return;
      intObserver.current && intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((posts) => {
        console.log(posts);
        if (posts[0].isIntersecting && hasNextPage) fetchNextPage();
      });
      posts && intObserver.current.observe(posts);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );
  if (isLoading) return <>isLoading</>;
  if (error) return <>Error: {error.message}</>;
  const { postsResponses } = data?.pages[0];

  return (
    <Feed>
      {postsResponses?.map((post, i) => {
        return postsResponses.length - 1 === i && lastPostRef ? (
          <Post ref={lastPostRef} post={post} />
        ) : (
          <Post post={post} />
        );
      })}
    </Feed>
  );
};

export default HomePage;
