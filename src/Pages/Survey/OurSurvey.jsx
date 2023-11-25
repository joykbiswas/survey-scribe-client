import { useLoaderData } from "react-router-dom";
import SurveyCards from "./SurveyCards";
import OurSurveyCategory from "./OurSurveyCategory";
import { useState } from "react";

const OurSurvey = () => {
  const surveys = useLoaderData();
  const [selectedCategory,setSelectedCategory] = useState(null);


  const filteredSurveys = selectedCategory === "all" 
  ? surveys
  : selectedCategory 
  ? surveys.filter((survey) => survey.category === selectedCategory)
  : surveys;

  console.log(surveys);
  return (
    <div>
      <div>
        <OurSurveyCategory setSelectedCategory={setSelectedCategory}></OurSurveyCategory>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredSurveys.map((survey) => (
        <SurveyCards key={survey._id} survey={survey}></SurveyCards>
      ))}
    </div>
    </div>
  );
};

export default OurSurvey;
