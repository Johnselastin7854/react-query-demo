import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <>
      <Navigation />
      <p>Learn React Query</p>
      <Outlet />
    </>
  );
}

export default Home;
