import Contact from "./Contact/Contact";
import History from "./History/History";
import TeamMembers from "./TeamMember/TeamMembers";

const AboutUS = () => {
  return (
    <div className=" mt-8">
      {/* banner section */}
      <div className=" bg-red-50 ">
        <img
          className=" h-72 mx-auto "
          src="https://i.ibb.co/WybJgXR/survey-removebg-preview.png"
          alt=""
        />
      </div>
      {/* about us */}
      <div className="my-14">
        <div className="justify-center text-center">
          <h1 className="text-4xl font-bold">About us</h1>
          <h5 className="text-2xl md:text-3xl font-thin">
            This help us to improve our service and customer satisfaction
          </h5>
        </div>
        {/* history & vision */}
        <div className="md:flex m-3">
          <div className="md:w-2/3 mt-6 pr-14">
            <History></History>
          </div>
          <div className="md:w-1/3">
            <TeamMembers></TeamMembers>
          </div>
        </div>
        <div>
            <Contact></Contact>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUS;
