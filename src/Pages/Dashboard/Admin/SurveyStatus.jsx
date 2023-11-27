import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const SurveyStatus = () => {
    const axiosSecure = useAxiosSecure();
    const { data: survey = [], } = useQuery({
      queryKey: ["survey"],
      queryFn: async () => {
        const res = await axiosSecure.get("/survey");
        return res.data;
      },
    });
    console.log(survey);
    return (
        <div>
        <div className="flex justify-evenly my-4">
          <h4 className="text-3xl">Total ProUsers: {survey.length}</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Category</th>
                <th>Title</th>
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
                  <td>{survey.like}</td>
                  <td>{survey.dislike}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default SurveyStatus;