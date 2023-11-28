import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const FeedBack = () => {
  const axiosSecure = useAxiosSecure();
  const { data: comment = [] } = useQuery({
    queryKey: ["comment"],
    queryFn: async () => {
      const res = await axiosSecure.get("/comments");
      return res.data;
    },
  });
  return (
    <div>
      <div className="mt-14">
        <div className="flex justify-evenly my-4"></div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Category</th>
                <th>UserName</th>
                <th>Comment</th>
                <th>Like</th>
                <th>Dislike</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {comment.map((survey, index) => (
                <tr key={survey._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{survey.category}</td>
                  <td>{survey.name}</td>
                  <td>{survey.comment}</td>
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

export default FeedBack;
