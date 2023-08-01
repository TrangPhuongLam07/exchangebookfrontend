import { useMemo, useRef } from "react";
import Feed from "~/components/feed";
import { usePosts } from "~/hooks";

const HomePage = () => {
  const { data, isFetchingNextPage, error, fetchNextPage } = usePosts;
  const intObserver = useRef();
  const lastPost = useMemo();
  return (
    <>
      <Feed />
    </>
  );
};

export default HomePage;
