import { useInfiniteQuery } from "@tanstack/react-query";
import { postService } from "~/services";

const HomePage = () => {
  const {} = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: postService.getAll,
  });
  return <></>;
};

export default HomePage;
