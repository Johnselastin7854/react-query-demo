import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function ParallelQueries() {
  const { data: superHeroes } = useQuery({
    queryKey: ["superHeroess"],
    queryFn: () => axios.get("http://localhost:8000/superheroes"),
  });

  const { data: friends } = useQuery(
    ["friends"],
    () => axios.get("http://localhost:8000/friends"),
    {
      staleTime: 3000,
    }
  );
  console.log(friends);
  return (
    <div>
      <p style={{ color: "green" }}>
        single component needs to call multiple API's to fetch{" "}
        <span
          style={{
            color: "black",
            display: "block",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Method 1
        </span>
      </p>

      <p>Superheroes from superhero API</p>
      {superHeroes?.data.map((heroes) => (
        <div key={heroes.name}>{heroes.name}</div>
      ))}

      <hr />

      <p>Friends from Friends API</p>
      {friends?.data.map((friend) => (
        <div key={friend.name}>{friend.name}</div>
      ))}
    </div>
  );
}

export default ParallelQueries;
