/* eslint-disable react/prop-types */
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { Link } from "react-router-dom";

const SurveyCards = ({ survey }) => {
  const { _id, title, category, description, like, disLike, } =survey;
 
  const axiosSecure = useAxiosSecure();
  const [likeCount, setLikeCount] = useState(like);
  const [disLikeCount , setDisLikeCount] = useState(disLike);

  
  const handleLikeClick = () =>{
    setLikeCount(like +1); 
    axiosSecure.patch(`/survey/like/${_id}`)
  }

  const handleDisLikeClick = () =>{
    setDisLikeCount(disLike +1)
    axiosSecure.patch(`/survey/dislike/${_id}`)
  }
  return (
    <div>
      <div className="max-w-sm mx-auto bg-white hover:shadow-2xl  overflow-hidden border rounded-tl-3xl rounded-br-3xl border-x-indigo-500 border-y-indigo-500">
        <div className="card  bg-base-100 ">
          <div className="card-body">
          <h2 className="text-2xl font-semibold">{title}</h2>
            <h3 className="text-2xl font-normal"> {category}</h3>
            <p className="text-lg">
              {
                description.length >200 ?(
                  <p>{description.slice(0,200)} <span>  ...</span></p>
                )
                :(<p>{description}</p>)
              }
            </p>
            
           <div className="flex justify-start  gap-4">
              <div className="flex items-center text-2xl">
                <button
                  onClick={handleLikeClick}
                  className="hover:text-green-600"
                >
                  <GrLike />
                </button>
                <p className="text-xl">{likeCount}</p>
              </div>

              <div className="flex items-center text-2xl">
                <button
                  onClick={handleDisLikeClick}
                  className="hover:text-red-400 "
                >
                  <GrDislike className=" " />
                </button>
                <h4 className="text-xl ">{disLikeCount}</h4>
              </div>
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

export default SurveyCards;
