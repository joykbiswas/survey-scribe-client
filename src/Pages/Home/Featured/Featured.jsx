import  { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { axiosSecure } from "../../../hooks/useAxiosSecure";

const Featured = () => {
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    axiosSecure("/survey").then((res) => setSurveys(res.data));
    // fetchData();
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:5000/survey")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setSurveys(data);
  //     });
  //     fetchData();
  // }, []);
  const sortedSurveys = surveys.slice().sort((a, b) => b.like - a.like);

  return (
    <div className="my-16">
      <div className="text-6xl font-bold text-center mb-8">Top Featured </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        sortedSurveys.map(survey =><FeaturedCard key={survey._id} survey={survey}></FeaturedCard>)
      }
      </div>
    </div>
  );
};

export default Featured;
