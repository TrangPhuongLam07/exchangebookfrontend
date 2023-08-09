import Post from "~/components/post";
import Feed from "~/components/feed";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { postService, userService } from "~/services";
import { useAuth } from "~/contexts/auth";
const HomePage = () => {
  const { auth } = useAuth();
  const { data: me } = useQuery({
    queryKey: "me",
    queryFn: userService.getProfile,
  });
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

  if (error) return <>Error: {error.message}</>;
  return (
    <Feed>
      {data?.pages.map((page) => {
        return page.map((post, i) => {
          // if (data?.pages.length - 1 === i) {
          //   return <Post key={uuid} ref={lastPostRef} post={post} />;
          // }
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
