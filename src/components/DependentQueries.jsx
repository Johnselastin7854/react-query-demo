import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:8000/users/${email}`);
};

const fetchCoursesByChannelId = (channelID) => {
  return axios.get(`http://localhost:8000/channels/${channelID}`);
};
function DependentQueries({ email }) {
  const { data: user } = useQuery({
    queryKey: ["user", email],
    queryFn: () => fetchUserByEmail(email),
  });
  const channelID = user?.data.channelId;

  const { data: courses } = useQuery(
    ["courses", channelID],
    () => fetchCoursesByChannelId(channelID),
    {
      enabled: !!channelID, // enable the property if the value in true and not null. If the value is true, then the double exclamation points will return true. If the value is false or undefined, then the double exclamation points will return false.
    }
  );
  return (
    <div>
      <h2>DependentQueries</h2>
      <p>
        Dependent queries in React Query are queries that depend on the results
        of other queries. This means that they will not be executed until the
        previous queries have finished executing and returned their results.
      </p>

      <hr />

      <p>email:{user?.data.id}</p>
      <p>channelID:{user?.data.channelId}</p>

      {courses?.data.courses.map((course) => (
        <ul>
          <li key={course}>{course}</li>
        </ul>
      ))}
    </div>
  );
}

export default DependentQueries;
