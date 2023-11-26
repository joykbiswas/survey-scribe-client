/* eslint-disable react/prop-types */
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { Link } from "react-router-dom";

const LatestSurveyCard = ({ survey }) => {
  const { _id, title, category, description, like, dislike, timestamp } =
    survey;
  // console.log(survey);
  return (
    <div>
      <div className=" max-w-sm mx-auto bg-white hover:shadow-2xl  overflow-hidden border rounded-tl-3xl rounded-br-3xl border-x-indigo-500 border-y-indigo-500">
        <div className="card  bg-base-200 ">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <h3> {category}</h3>
            <p>{description}</p>
            <div className="flex justify-start  gap-4">
              <button className="text-xl  "><span><GrLike className="" />{like}</span></button>
              <button className="text-xl  "><h4><GrDislike />{dislike}</h4></button>
            </div>
            <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestSurveyCard;
