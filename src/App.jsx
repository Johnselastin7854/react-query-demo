import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import ReactQueryFetch from "./components/ReactQueryFetch";
import TraditionalDataFetching from "./components/TraditionalDataFetching";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RQSuperHeroDetails from "./components/RQSuperHeroDetails";
import ParallelQueries from "./components/ParallelQueries";
import DyanamicParallel from "./components/DyanamicParallel";
import DependentQueries from "./components/DependentQueries";
import PaginatedQueries from "./components/PaginatedQueries";
import InfinteQueries from "./components/InfinteQueries";
import MutationQuery from "./components/MutationQuery";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/traditional" element={<TraditionalDataFetching />} />
            <Route path="/rq-data-fetch" element={<ReactQueryFetch />} />
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroDetails />}
            />
            <Route path="/rq-parallel-queries" element={<ParallelQueries />} />
            <Route
              path="/rq-dynamic-parallel-queries"
              element={<DyanamicParallel heroIds={[1, 3]} />}
            />
            <Route
              path="/rq-dependent-queries"
              element={<DependentQueries email="john@example.com" />}
            />
            <Route
              path="/rq-paginated-queries"
              element={<PaginatedQueries />}
            />
            <Route path="/rq-infinte-queries" element={<InfinteQueries />} />
            <Route path="/rq-mutation-queries" element={<MutationQuery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
