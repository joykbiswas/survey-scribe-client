/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";

const OurSurveyCategory = ({ setSelectedCategory }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setActiveFilter(selectedValue);
    setSelectedCategory(selectedValue);
  };

  return (
    <div>
      <div className="form-control md:w-1/2 ml-4">
        <label className="label">
          <span className="label-text">Filter by Category</span>
        </label>

        <select
          className="select select-bordered join-item"
          onChange={handleSelectChange}
          value={activeFilter}
        >
          <option value="all">All</option>
          <option value="Market Research">Market Research</option>
          <option value="Health and Wellness">Health and Wellness</option>
          <option value="Food and Dining">Food and Dining</option>
          <option value="Research & Education">Research & Education</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Work and Career">Work and Career</option>
        </select>
      </div>
    </div>
  );
};

export default OurSurveyCategory;

OurSurveyCategory.propTypes = {
  setSelectedCategory: PropTypes.func,
};


/*
import PropTypes from "prop-types";
import  { useState } from "react";

const OurSurveyCategory = ({setSelectedCategory}) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleButtonClick = (filter) => {
    setActiveFilter(filter);
    setSelectedCategory(filter);
  };
  return (
    <div>
      <div className="form-control md:w-1/2 ml-4">
        <label className="label">
          <span className="label-text">All Category</span>
        </label>

        <select
          className="select select-bordered join-item"
        >
          
          <option disabled selected>
            category
          </option>
          

          <option
            onClick={() => handleButtonClick("all")}
            className={`text-xl  ${
              activeFilter === "all" ? "underline text-blue-500" : ""
            }`}
          >
            All
          </option>

          <option
            onClick={() => handleButtonClick("MarketResearch")}
            className={`text-xl ${
              activeFilter === "MarketResearch"
                ? "underline text-blue-500"
                : ""
            }`}
          >
            Market Research
          </option>

          <option
            onClick={() => handleButtonClick("Health and Wellness")}
            className={`text-xl ${
              activeFilter === "Health and Wellness"
                ? "underline text-blue-500"
                : ""
            }`}
          >
            Health and Wellness
          </option>

          <button
            onClick={() => handleButtonClick("Food and Dining")}
            className={`text-xl ${
              activeFilter === "Food and Dining"
                ? "underline text-blue-500"
                : ""
            }`}
          >
            <option>Food and Dining</option>
          </button>
          <button
            onClick={() => handleButtonClick("Research & Education")}
            className={`text-xl ${
              activeFilter === "Research & Education"
                ? "underline text-blue-500"
                : ""
            }`}
          >
            <option>Research & Education</option>
          </button>
          <button
            onClick={() => handleButtonClick("Entertainment")}
            className={`text-xl ${
              activeFilter === "Entertainment" ? "underline text-blue-500" : ""
            }`}
          >
            <option>Entertainment</option>
          </button>
          <button
            onClick={() => handleButtonClick("Work and Career")}
            className={`text-xl ${
              activeFilter === "Work and Career"
                ? "underline text-blue-500"
                : ""
            }`}
          >
            <option>Work and Career</option>
          </button>
        </select>
      </div>
    </div>
  );
};

export default OurSurveyCategory;

OurSurveyCategory.propTypes = {
    setSelectedCategory: PropTypes.func,
  };
*/