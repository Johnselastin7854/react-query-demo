import React, { Fragment } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchColos = ({ pageParams = 1 }) => {
  return axios.get(`http://localhost:8000/colors?_limit=2&_page=${pageParams}`);
};

function InfinteQueries() {
  const {
    data,
    isLoading,
    error,
    isError,
    hasNextPage, // boolean
    fetchNextPage, // Function
    isFetching,
    isFetchingNextPage, // boolean
  } = useInfiniteQuery({
    queryKey: ["colors"],
    queryFn: fetchColos,
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h2>loading.....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        {data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group.data.map((color) => (
              <h2 key={color.id}>
                {color.id}. {color.label}
              </h2>
            ))}
          </Fragment>
        ))}
      </div>

      <button disabled={!hasNextPage} onClickCapture={() => fetchNextPage}>
        Load More...
      </button>

      <p>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</p>
    </>
  );
}

export default InfinteQueries;
