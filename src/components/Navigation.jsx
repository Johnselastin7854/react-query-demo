import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/traditional">Traditional-Data-Fetching</Link>
            </li>
            <li>
              <Link to="/rq-data-fetch">ReactQuery-data-fetching</Link>
            </li>
            <li>
              <Link to="/rq-parallel-queries">ReactQuery Parallel</Link>
            </li>
            <li>
              <Link to="/rq-dynamic-parallel-queries">
                ReactQuery Dynamic Parallel
              </Link>
            </li>
            <li>
              <Link to="/rq-dependent-queries">Dependent Queries</Link>
            </li>
            <li>
              <Link to="/rq-paginated-queries">Paginated Queries</Link>
            </li>
            <li>
              <Link to="/rq-infinte-queries">Infinited Queries</Link>
            </li>
            <li>
              <Link to="/rq-mutation-queries">Mutation Queries</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
