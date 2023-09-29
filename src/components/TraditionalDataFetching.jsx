import axios from "axios";
import { useEffect, useState } from "react";

function TraditionalDataFetching() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <p style={{ color: "green", fontSize: "30px", fontWeight: "600" }}>
        TraditionalDataFetching
      </p>
      {data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
}

export default TraditionalDataFetching;
