import { IoMdCheckmarkCircle } from "react-icons/io";
import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div >
             <p className="flex text-xl ml-8  items-center"><IoMdCheckmarkCircle className="m-3 text-blue-600 text-xl"></IoMdCheckmarkCircle>{feature}</p>
        </div>
    );
};
Feature.propTypes={
    feature: PropTypes.string
}
export default Feature;