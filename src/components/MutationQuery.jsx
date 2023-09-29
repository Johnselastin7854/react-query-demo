import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { superHeroesData, useAddSuperHeroData } from "../hooks/useDataHook";
import { Link } from "react-router-dom";

function MutationQuery() {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const success = (data) => {
    console.log("Perform side effects after data fetching", data);
  };
  const errors = (error) => {
    console.log("Perform side effects after data fetching", error);
  };
  const {
    data: superHeroes,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = superHeroesData(success, errors);

  const { mutate: addHero } = useAddSuperHeroData();

  if (isLoading && isFetching) {
    return <p>Loading.....</p>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const handleClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  return (
    <>
      <h1>MutationQuery</h1>
      <hr />

      <h6 style={{ color: "red", fontSize: "25px" }}>
        What is Mutation in react query?
      </h6>

      <p>
        A mutation in React Query is a{" "}
        <span
          style={{ color: "green", fontSize: "1.5rem", fontWeight: "bold" }}
        >
          function that performs a side effect on the server, such as creating,
          updating, or deleting data.
        </span>{" "}
        React Query provides a number of features that make it easy to manage
        mutations, including caching, optimistic updates, and error handling.
      </p>

      <p>
        The data is not automatically refetched when you add or update data
        using a mutation in React Query. This is because mutations are designed
        to update the data on the server, but the data in the React Query cache
        is not automatically synchronized with the data on the server.
      </p>

      <hr />

      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="text" onChange={(e) => setAlterEgo(e.target.value)} />
        <button onClick={handleClick}>Add Hero</button>
      </div>

      <div>
        <p style={{ color: "red", fontSize: "30px", fontWeight: "600" }}>
          ReactQueryFetch
        </p>
        <button onClick={refetch}>Fetch Heroees</button>
        {superHeroes?.data.map((heros) => (
          <div key={heros.id}>
            <Link to={`/rq-super-heroes/${heros.id}`}>{heros.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default MutationQuery;
