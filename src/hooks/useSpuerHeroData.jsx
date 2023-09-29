import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useSuperHeroData = (heroID) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["super-heroes", heroID],
    queryFn: () => axios.get(`http://localhost:8000/superheroes/${heroID}`),
    // initialData: () => {
    //   const hero = queryClient
    //     .getQueryData("super-heroes")
    //     ?.data?.find((hero) => hero.id === parseInt(heroID));

    //   if (hero) {
    //     return {
    //       data: hero,
    //     };
    //   } else {
    //     return undefined;
    //   }
    // },
  });
};
