// import  { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import FeaturedCard from "./FeaturedCard";
// import useAxiosSecure, { axiosSecure } from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Featured = () => {
  const axiosSecure = useAxiosSecure();
    const { data: surveys = [], refetch } = useQuery({
      queryKey: ["surveys"],
      queryFn: async () => {
        const res = await axiosSecure.get("/survey");
        const sortedSurveys = res.data.sort((a, b) => b.like - a.like);

        return sortedSurveys;
      },
    });
    
 

  return (
    <div className="my-16">
      <div className="text-6xl font-bold text-center mb-8">Top Featured </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        surveys.map(survey =><FeaturedCard key={survey._id}
           survey={survey} refetch={refetch}></FeaturedCard>)
      }
      </div>
    </div>
  );
};

export default Featured;
