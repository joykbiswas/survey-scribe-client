import { useLoaderData } from "react-router-dom";
import SurveyCards from "./SurveyCards";

const Survey = () => {
  const surveys = useLoaderData();
  console.log(surveys);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {surveys.map((survey) => (
        <SurveyCards key={survey._id} survey={survey}></SurveyCards>
      ))}
    </div>
  );
};

export default Survey;
