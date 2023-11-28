import { GrDislike, GrLike } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import useProUser from "../../hooks/useProUser";
// import { useQuery } from "@tanstack/react-query";
const SurveyDetails = () => {
  const [isProUser] = useProUser();  
  const surveys = useLoaderData();
  const { _id,category, description, disLike, like, title } = surveys;

  const axiosSecure = useAxiosSecure();
  // const { data: comment = [],  } = useQuery({
  //   queryKey: ["comment"],
  //   queryFn: async (survey_id) => {
  //     const res = await axiosSecure.get(`/comments/${survey_id}`);
  //     return res.data;
  //   },
  // });
// console.log('comment--',comment);



  // const axiosSecure = useAxiosSecure();
  const [likeCount, setLikeCount] = useState(like);
  const [disLikeCount, setDisLikeCount] = useState(disLike);

  const handleLikeClick =async () => {
    setLikeCount(like + 1);

    await axiosSecure.patch(`/survey/like/${_id}`);
    
  };

  const handleDisLikeClick = () => {
    setDisLikeCount(disLike + 1);
    axiosSecure.patch(`/survey/dislike/${_id}`);
  };
  const { user } = useAuth();

  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const email = form.email.value;
    const name = form.name.value;

    const apply = {
      email,
      name,
      category,
      description,
      disLike,
      like,
      title,
      comment,
      survey_id:_id,
    };
    console.log(apply);
    fetch('http://localhost:5000/comments',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(apply)
    })
    .then(res =>res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire(
          'Good job!',
          'Your Comment Successfully',
          'success'
        )
      }
    })
    // navigate( '/my_bids')
    
  };


  return (
    <div className="my-7">
      <div className=" w-2/3 mx-auto">
        <div className="card  bg-base-200 ">
          <div className="card-body">
            <h2 className="text-5xl font-semibold">{title}</h2>
            <h3 className="text-3xl font-semibold"> {category}</h3>
            <p className="text-2xl">{description}</p>
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
            <form onSubmit={handleComment}>
              <div className="flex py-3 gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Email"
                  value={user?.displayName}
                  readOnly
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={user?.email}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <input
                type="text"
                name="comment"
                placeholder="Comment here..."
                className="input input-bordered w-full"
                required
              />
             {
              isProUser ? <>
               <input
                type="submit"
                value="Send"
                className="btn w-full bg-[#72c4f6] my-4"
              /> </>
              :<>
              
              <input
              disabled
                type="submit"
                value="Send"
                className="btn w-full bg-[#72c4f6] my-4"
              />
              <p className="text-sm text-red-300">only pro user comment</p>
              </>
             }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetails;
