import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Testimonials from "./Testimonals";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Survey Scribe </title>
      </Helmet>
      <Banner></Banner>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
