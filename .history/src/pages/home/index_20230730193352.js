import { useInfiniteQuery } from "@tanstack/react-query";
import { postService } from "~/services";

const HomePage = () => {
  const {} = useInfiniteQuery(["posts"], postService.getAll);
  return <></>;
};

export default HomePage;
