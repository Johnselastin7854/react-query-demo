import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const fetchColos = (pageNumber) => {
  return axios.get(`http://localhost:8000/colors?_limit=2&_page=${pageNumber}`); // limits are from json-server
};

function PaginatedQueries() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, error, isError, isFetching } = useQuery({
    queryKey: ["colors", pageNumber],
    queryFn: () => fetchColos(pageNumber),
    keepPreviousData: true, // React query will maintain the data when the last successful fetch while the new data is being requested.
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
        {data.data.map((color) => (
          <div key={color.id}>
            <h2>
              {color.id}. {color.label}
            </h2>
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </button>
      </div>

      {isFetching && <p>Loading....</p>}
    </>
  );
}

export default PaginatedQueries;
