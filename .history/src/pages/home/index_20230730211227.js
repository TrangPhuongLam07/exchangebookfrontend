import Feed from "~/components/feed";
import { usePosts } from "~/hooks";

const HomePage = () => {
  const { data, isFetchingNextPage, error, fetchNextPage } = usePosts;
  console.log(data);
  return (
    <>
      <Feed />
    </>
  );
};

export default HomePage;
