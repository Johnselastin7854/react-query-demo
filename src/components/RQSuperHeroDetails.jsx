import React from "react";
import { useSuperHeroData } from "../hooks/useSpuerHeroData";
import { useParams } from "react-router-dom";

function RQSuperHeroDetails() {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
}

export default RQSuperHeroDetails;
