import { GrDislike, GrLike } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";

const SurveyDetails = () => {
  const surveys = useLoaderData();
  const { category, description, dislike, like, option, title } = surveys;
  console.log(surveys);
  return (
    <div>
      <div className=" max-w-sm mx-auto bg-white hover:shadow-2xl  overflow-hidden border rounded-tl-3xl rounded-br-3xl border-x-indigo-500 border-y-indigo-500">
        <div className="card  bg-base-200 ">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <h3> {category}</h3>
            <p>{description}</p>
            <div className="flex justify-start  gap-4">
              <button className="text-xl  ">
                <span>
                  <GrLike className="" />
                  {like}
                </span>
              </button>
              <button className="text-xl  ">
                <h4>
                  <GrDislike />
                  {dislike}
                </h4>
              </button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetails;
