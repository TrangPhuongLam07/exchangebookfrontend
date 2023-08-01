import { useMemo, useRef } from "react";
import Feed from "~/components/feed";
import { usePosts } from "~/hooks";

const HomePage = () => {
  const { data, isFetchingNextPage, error, fetchNextPage } = usePosts;
  const intObserver = useRef();
  const lastPost = useMemo((post) => {
    intObserver.current && intObserver.current.disconnect();
    intObserver.current = new IntersectionObserver((posts) => {
      posts && intObserver.current.observe(posts);
    });
  });
  return (
    <>
      <Feed />
    </>
  );
};

export default HomePage;
