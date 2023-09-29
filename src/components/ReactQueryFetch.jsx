import { Link } from "react-router-dom";
import { superHeroesData } from "../hooks/useDataHook";

function ReactQueryFetch() {
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
  if (isLoading && isFetching) {
    return <p>Loading.....</p>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <p style={{ color: "red", fontSize: "30px", fontWeight: "600" }}>
        ReactQueryFetch
      </p>
      <button onClick={refetch}>Fetch Heroees</button>
      {superHeroes?.data.map((heros) => (
        <div key={heros.id}>
          <Link to={`/rq-super-heroes/${heros.id}`}>{heros.name}</Link>
        </div>
      ))}
      {/* {superHeroes?.map((hero) => (
        <div key={hero}>{hero}</div>
      ))} */}
    </>
  );
}

export default ReactQueryFetch;
