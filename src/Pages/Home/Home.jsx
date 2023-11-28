import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Testimonials from "./Testimonals";
import { useLoaderData } from "react-router-dom";
// import SurveyCard from "./SurveyCard";
// import Survey from "./LatestSurvey";
import LatestSurvey from "./LatestSurvey";
import Qna from "./Qna";
import Featured from "./Featured/Featured";
import OurServices from "./Discover/OurServices";
// import FeatureSection from "./FeatureSection";

const Home = () => {
  const surveys = useLoaderData();
  console.log(surveys);
  return (
    <div>
      <Helmet>
        <title>Survey Scribe </title>
      </Helmet>
      <Banner></Banner>
     <Featured></Featured>
      <LatestSurvey></LatestSurvey>
      <OurServices></OurServices>
      <Testimonials ></Testimonials>
      <Qna></Qna>
    </div>
  );
};

export default Home;
