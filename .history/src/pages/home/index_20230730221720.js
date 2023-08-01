import { isError, useInfiniteQuery } from "@tanstack/react-query";
import { useMemo, useRef } from "react";
import Feed from "~/components/feed";
import Post from "~/components/post";
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
  const lastPostRef = useMemo(
    (posts) => {
      if (isFetchingNextPage) return;
      intObserver.current && intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) fetchNextPage();
      });
      posts && intObserver.current.observe(posts);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );
  if (error) return <>Error: {error.message}</>;
  const { postsResponses } = data?.pages[0];

  return (
    <>
      {postsResponses.map((post, i) => (
        <Post
          ref={postsResponses.length - 1 === i && lastPostRef}
          post={post}
        />
      ))}
    </>
  );
};

export default HomePage;
