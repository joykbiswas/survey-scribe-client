import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageSurvey = () => {
  const axiosSecure = useAxiosSecure();
  const { data: survey = [] } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const res = await axiosSecure.get("/survey");
      return res.data;
    },
  });

  return (
    <div>
      <div className="mt-12">
        <div className="flex justify-evenly my-4">
          <h4 className="text-3xl">Total Survey: {survey.length}</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Category</th>
                <th>Title</th>
                <th>Time</th>
                <th>Like</th>
                <th>Dislike</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {survey.map((survey, index) => (
                <tr key={survey._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{survey.category}</td>
                  <td>{survey.title}</td>
                  <td>{survey.timestamp}</td>
                  <td>{survey.like}</td>
                  <td>{survey.disLike}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageSurvey;
