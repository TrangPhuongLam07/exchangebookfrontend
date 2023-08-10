import Post from "~/components/post";
import Feed from "~/components/feed";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
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
    queryFn: postService.getAll,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < 3 && allPages.length + 1;
    },
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });
  const intObserver = useRef();
  const lastPostRef = useCallback(
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
  console.log({ data });
  if (isLoading) return <>Loadubg</>;
  if (error) return <>Error: {error.message}</>;
  if (data?.pages[0].length < 1) return <>No more posts</>;
  return (
    <Feed>
      {data?.pages.map((page) => {
        return page.map((post, i) => {
          return (
            <Post
              key={i}
              post={post}
              ref={data?.pages.length - 1 === i ? lastPostRef : null}
            />
          );
        });
      })}
      {!hasNextPage && "No more post"}
    </Feed>
  );
};

export default HomePage;
