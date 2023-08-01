import React, { useEffect, useState } from "react";

const usePosts = () => {
  const { data, isFetchingNextPage, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: () => postService.getAll(),
    getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });
  return {
    data,
    isFetchingNextPage,
    error,
    fetchNextPage,
  };
};

export default usePosts;
