import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";
import axios from "axios";

export const superHeroesData = (success, errors) => {
  return useQuery({
    queryKey: ["super-heroes"],
    queryFn: () => axios.get("http://localhost:8000/superheroes"),
    enabled: true,
    onSuccess: success,
    onError: errors,
    // select: (data) => {
    //   const superHeroNames = data?.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

const addSuperHero = (hero) => {
  return axios.post(`http://localhost:8000/superheroes`, hero);
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: () => {
    //   // everytime we add the new query data into the db.. the prevoius query items are not valid.. so we manually refersh the data.. Inorder to overcome this use ⬇️
    //   // queryClient.invalidateQueries("super-heroes");// ⬅️ this one wate the network calls.. example. New POST request call and One GET request call.
    // },

    onSuccess: (data) => {
      // the data is represnt the entire response of the POSt Request.
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
