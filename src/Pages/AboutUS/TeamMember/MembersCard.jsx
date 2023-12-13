import "./style.css";
import PropTypes from "prop-types";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";

const MembersCard = ({ member }) => {
  const { img, name, profession } = member;
  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="mainDiv rounded-lg shadow-md overflow-hidden bg-white/50 dark:bg-my-dark-btn"
      >
        <div className=" relative w-full h-60 overflow-hidden">
          <div className=" h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 ">
            <img src={img} alt="" className=" h-48 w-full" />
          </div>
        </div>
        {/* default */}
        <div className=" info px-2 md:px-5 relative border-t border-white/10 dark:text-gray-400">
          <div className="">
            <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-gray-700 dark:text-gray-400">
              {name}
            </h2>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
              {profession}
            </h2>
          </div>
        </div>
        {/* hover after */}
        <div className="tech px-2 md:px-5 relative border-t border-white/10">
          <p className="uppercase dark:text-gray-400 ">
            
            <span className="text-xl font-bold">+8801712.... </span>
            <div className="flex  text-2xl justify-between items-center   ">
              <BiLogoFacebook className="hover:text-green-500"></BiLogoFacebook>
              <BiLogoTwitter className="hover:text-red-500"></BiLogoTwitter>
              <AiOutlineInstagram className="hover:text-fuchsia-400"></AiOutlineInstagram>
            </div>
          </p>
          <div data-aos="fade-up" className="flex justify-between mt-2">
            {/* <Link to={liveLink}>  <button className="myBtn px-6 py-2 bg-btn-grad"> Live Link</button></Link>
       <Link to={github}> <button className="myBtn px-6 py-2 bg-btn-grad flex items-center gap-1"><FaGithub/> Github</button></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;

MembersCard.propTypes = {
  member: PropTypes.object,
};
