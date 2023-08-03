import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useId, useRef, useState } from "react";
import Feed from "~/components/feed";
import Post from "~/components/post";
import { postService } from "~/services";
const HomePage = () => {
  const uuid = useId();
  const [lastPostId, setLastPostId] = useState();
  const { data, isFetchingNextPage, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
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

  useEffect(() => {
    setLastPostId(uuid);
  }, [setLastPostId]);
  if (error) return <>Error: {error.message}</>;
  return (
    <Feed>
      {data?.pages.map((page, i) => {
        return page.map((post) => {
          if (data?.pages.length - 1 === i) {
            return <Post key={id} ref={lastPostRef} post={post} />;
          }
          return <Post key={i} post={post} />;
        });
      })}
      {!hasNextPage && "No more post"}
    </Feed>
  );
};

export default HomePage;