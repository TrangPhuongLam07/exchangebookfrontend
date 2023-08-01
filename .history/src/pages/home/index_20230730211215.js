import Feed from "~/components/feed";
import { usePost } from "~/hooks";

const HomePage = () => {
  const { data, isFetchingNextPage, error, fetchNextPage } = usePost;
  console.log(data);
  return (
    <>
      <Feed />
    </>
  );
};

export default HomePage;
