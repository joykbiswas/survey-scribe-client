import { useEffect, useState } from "react";
import { axiosSecure } from "../../hooks/useAxiosSecure";
// import SurveyCard from "./LatestSurveyCard";
import LatestSurveyCard from "./LatestSurveyCard";
// import useSurvey from "../../hooks/useSurvey";

const LatestSurvey = () => {
    // const surveys = useSurvey();
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    axiosSecure("/survey").then((res) => setSurveys(res.data));
  }, []);
  return (
    <div>
        <div>
            
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {surveys.map((survey) => (
          <LatestSurveyCard key={survey._id} survey={survey}></LatestSurveyCard>
        ))}
      </div>
    </div>
  );
};

export default LatestSurvey;
