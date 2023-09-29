import axios from "axios";
import { useQueries } from "@tanstack/react-query";

const fetchQueries = (heroID) => {
  return axios.get(`http://localhost:8000/superheroes/${heroID}`);
};

function DyanamicParallel({ heroIds }) {
  //   console.log(heroIds);
  //   const { data, isLoading, error } = useQueries(
  //     heroIds?.map((id) => {
  //       return {
  //         queryKey: ["super-hero", id],
  //         queryFn: () => fetchQueries(id),
  //       };
  //     })
  //   );
  return <div>DyanamicParallel</div>;
}

export default DyanamicParallel;
