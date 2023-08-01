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
    isFetched,
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
        if (posts[0].isIntersecting && hasNextPage)
          intObserver.current.obseirve(posts);
      });
      posts && intObserver.current.observe(posts);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );
  if (error) return <>Error: {error.message}</>;
  const content = data?.pages.map((post, i) => {
    if (data.pages.length === i + 1) {
      return <Post ref={lastPostRef} post={post} />;
    }
  });

  return <>{content}</>;
};

export default HomePage;
