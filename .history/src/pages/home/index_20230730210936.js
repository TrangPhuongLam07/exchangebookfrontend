import { useInfiniteQuery } from "@tanstack/react-query";
import Feed from "~/components/feed";
import { postService } from "~/services";

const HomePage = () => {
  return (
    <>
      <Feed />
    </>
  );
};

export default HomePage;
