/* eslint-disable react/prop-types */
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";

const SurveyCard = ({ survey }) => {
  const {  title, category, description, like, dislike, timestamp } =
    survey;
  console.log(survey);
  return (
    <div>
      <div className="">
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <h3> {category}</h3>
            <p>{description}</p>
            <div className="flex justify-start  gap-4">
              <button className="text-xl  "><span><GrLike className="" />{like}</span></button>
              <button className="text-xl  "><h4><GrDislike />{dislike}</h4></button>
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

export default SurveyCard;
