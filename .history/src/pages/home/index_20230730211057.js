import Feed from "~/components/feed";
import { usePots } from "~/hooks";

const HomePage = () => {
  const { data, isFetchingNextPage, error, fetchNextPage } = usePots;
  console.log(data);
  return (
    <>
      <Feed />
    </>
  );
};

export default HomePage;
