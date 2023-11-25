import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Testimonials from "./Testimonals";
import { useLoaderData } from "react-router-dom";
import SurveyCard from "./SurveyCard";

const Home = () => {
  const surveys = useLoaderData();
  console.log(surveys);
  return (
    <div>
      <Helmet>
        <title>Survey Scribe </title>
      </Helmet>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        surveys.map(survey =>(
          <SurveyCard key={survey._id} survey={survey}></SurveyCard>
        ))
      }
      </div>
     
      <Testimonials ></Testimonials>
    </div>
  );
};

export default Home;
